import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PostsService } from './posts.service';
//nest g resource 하면 모듈을 만들 수 있다. 간편하네...

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}
  // 모든 post 가져오기
  @Get()
  getPosts() {
    return this.postsService.getAllPosts();
  }

  // 특정 post 가져오기
  // GET /posts/:id 파라미터로 구분해서 가져온다
  @Get(':id')
  getPost(@Param('id') id: string) {
    return this.postsService.getPostById(+id);
  }
  // Post 생성하기
  @Post()
  postPosts(
    @Body('author') author: string,
    @Body('tilte') title: string,
    @Body('content') content: string,
  ) {
    return this.postsService.createPost(author, title, content);
  }
  // Post 수정하기
  @Put(':id')
  putPost(
    @Param('id') id: string,
    @Body('author') author: string,
    @Body('title') title: string,
    @Body('content') content: string,
  ) {
    return this.postsService.updatePost(author, content, title, +id);
  }
  // Post 삭제하기
  @Delete(':id')
  deletePost(@Param('id') id: string) {
    return this.postsService.deletePost(+id);
  }
}
