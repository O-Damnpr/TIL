import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

interface Post {
  author: string;
  title: string;
  content: string;
  likeCount: number;
  commentCount: number;
}

@Controller('post')
export class AppController {
  constructor(private readonly appService: AppService) {}

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
