import { Injectable, NotFoundException } from '@nestjs/common';

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
  getAllPosts() {
    return posts;
  }

  getPostById(id: number) {
    //find 함수는 값을 찾지 못하면 undifined를 반환한다.
    const post = posts.find((post) => post.id === id);

    if (!post) {
      throw new NotFoundException();
    }

    return post;
  }

  createPost(author: string, title: string, content: string) {
    const post: PostModel = {
      id: posts[posts.length - 1].id + 1,
      author,
      title,
      content,
      likeCount: 0,
      commentCount: 0,
    };

    posts = [...posts, post];

    return post;
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
