import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UsersModule,
    PostsModule,
    AuthModule,
    MongooseModule.forRoot('mongodb://localhost:27017', {
      dbName: 'projetCoordinationFB',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
