import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty, MaxLength } from 'class-validator';
import { HydratedDocument } from 'mongoose';

export type PostDocument = HydratedDocument<Post>;

@Schema()
export class Post {
  @Prop()
  id: number;

  @Prop()
  @MaxLength(30)
  @IsNotEmpty()
  title: string;

  @Prop()
  @MaxLength(500)
  description: string;

  @Prop()
  image: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);
