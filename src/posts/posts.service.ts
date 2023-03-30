import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Model } from 'mongoose';
import { Post, PostDocument } from './entities/post.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post.name) private PostModel: Model<PostDocument>) {}

  create(createPostDto: CreatePostDto): Promise<Post> {
    const createdPost = new this.PostModel(createPostDto);
    return createdPost.save();
  }

  findAll(): Promise<Post[]> {
    return this.PostModel.find().exec();
  }

  findOne(id: string): Promise<Post> {
    return this.PostModel.findById(id).exec();
  }

  async update(id: string, updatePostDto: UpdatePostDto): Promise<Post> {
    const existingPost = await this.PostModel.findByIdAndUpdate(
      id,
      updatePostDto,
      { new: true },
    );
    if (!existingPost) {
      throw new NotFoundException(`Post with id : #${id} not found`);
    }
    return existingPost;
  }

  remove(id: string): Promise<Post> {
    return this.PostModel.findByIdAndDelete(id);
  }
}
