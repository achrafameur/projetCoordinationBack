import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty, MaxLength } from 'class-validator';
import mongoose, { HydratedDocument } from 'mongoose';

export type PostDocument = HydratedDocument<Post>;

@Schema()
export class Post {
  @Prop()
  id: number;

  @Prop({ required: true })
  @MaxLength(30)
  @IsNotEmpty()
  title: string;

  @Prop({ required: true })
  @MaxLength(500)
  description: string;

  @Prop()
  @MaxLength(500)
  image: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);
