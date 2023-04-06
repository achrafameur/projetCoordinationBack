import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Roles } from '../roles';
import { Post } from 'src/posts/entities/post.entity';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  id: number;

  @Prop({ required: true, maxlength: 20 })
  username: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true, maxlength: 20 })
  password: string;

  @Prop()
  role: Roles;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Posts' }] })
  posts: Post[];
}

export const UserSchema = SchemaFactory.createForClass(User);
