import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostsModel } from './entities/posts.entity';

export interface PostModel {
  id: number;
  author: string;
  title: string;
  content: string;
  likeCount: number;
  commentCount: number;
}

let posts: PostModel[] = [
  {
    id: 1,
    author: 'newjibs',
    title: '집가고싶다',
    content: '집에가고싶어요 너무',
    likeCount: 9999,
    commentCount: 9999,
  },
  {
    id: 2,
    author: 'qwerqwer',
    title: '졸려요',
    content: '집에가고싶어요 너무',
    likeCount: 9999,
    commentCount: 9999,
  },
  {
    id: 3,
    author: 'nononokht',
    title: '잠이와요',
    content: '아니 너무 졸리네 너무',
    likeCount: 9999,
    commentCount: 9999,
  },
];

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostsModel)
    private readonly postsRepository: Repository<PostsModel>,
  ) {}

  //컨트롤러에서 바로 반환해주기 때문에 안 붙여도 되지만, 나중에 await를 하고싶을 때가 있을 수도 있기 때문에 붙임
  async getAllPosts() {
    //레포지토리의 모든 메소드들은 async 즉 비동기이다.
    return this.postsRepository.find();
  }

  async getPostById(id: number) {
    //비동기이기 때문에 await를 하지 않으면 promiss로 반환되기 때문에 null이 아니라 에러가 잡히지 않는다.
    const post = await this.postsRepository.findOne({
      where: {
        //키값과 밸류값의 이름이 똑같을 땐 지우고 하나만 넣으면 된다.
        id,
      },
    });

    if (!post) {
      throw new NotFoundException();
    }

    return post;
  }

  //create method : 저장할 객체를 생성한다. save method : 객체를 저장한다(create 메서드에서 생성한 객체로)
  async createPost(author: string, title: string, content: string) {
    const post = this.postsRepository.create({
      author,
      title,
      content,
      likeCount: 0,
      commentCount: 0,
    });

    const newPost = await this.postsRepository.save(post);

    return newPost;
  }

  updatePost(author: string, content: string, title: string, id: number) {
    const post = posts.find((post) => post.id === id);

    if (!post) {
      throw new NotFoundException();
    }

    if (author) {
      post.author = author;
    }

    if (title) {
      post.title = title;
    }

    if (content) {
      post.content = content;
    }

    posts = posts.map((prevPost) => (prevPost.id === +id ? post : prevPost));

    return post;
  }

  deletePost(id: number) {
    const post = posts.find((post) => post.id === id);

    if (!post) {
      throw new NotFoundException();
    }

    posts.filter((post) => post.id !== id);

    return id;
  }
}
