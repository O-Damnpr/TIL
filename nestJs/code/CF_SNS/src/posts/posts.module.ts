import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsModel } from './entities/posts.entity';
//레포지토리 주입하려면 사용하려는 거 모듈 안에서 postRepository 임포트

@Module({
  imports: [
    //forRoot는 type orm 연결설정, forFeature은 모델에 해당하는 레포지토리 주입할 때
    TypeOrmModule.forFeature([PostsModel]),
  ],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
