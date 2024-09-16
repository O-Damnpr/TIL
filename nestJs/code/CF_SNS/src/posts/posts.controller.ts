import { Controller, Get } from '@nestjs/common';
import { PostsService } from './posts.service';

//nest g resource 하면 모듈을 만들 수 있다. 간편하네...

interface Post {
  author: string;
  title: string;
  content: string;
  likeCount: number;
  commentCount: number;
}

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}
  @Get()
  getPost(): Post {
    return {
      author: 'newjibs',
      title: '집가고싶다',
      content: '너무 집가고싶다',
      likeCount: 10000,
      commentCount: 999,
    };
  }
}
