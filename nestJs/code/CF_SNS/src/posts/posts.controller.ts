import { Controller, Get, Param } from '@nestjs/common';
import { PostsService } from './posts.service';

//nest g resource 하면 모듈을 만들 수 있다. 간편하네...

interface PostModel {
  id: number;
  author: string;
  title: string;
  content: string;
  likeCount: number;
  commentCount: number;
}

const posts: PostModel[] = [
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

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}
  // 모든 post 가져오기
  @Get()
  getPosts() {
    return posts;
  }

  // 특정 post 가져오기
  // GET /posts/:id 파라미터로 구분해서 가져온다
  @Get(':id')
  getPost(@Param('id') id: string) {
    return posts.find((post) => post.id === +id);
  }
  // Post 생성하기
  // Post 수정하기
  // Post 삭제하기
}
