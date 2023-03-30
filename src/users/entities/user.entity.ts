import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsEmail, IsNotEmpty, MaxLength } from 'class-validator';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  id: number;

  @Prop()
  @MaxLength(30)
  username: string;

  @Prop()
  @IsEmail()
  email: string;

  @Prop()
  @IsNotEmpty()
  @MaxLength(30)
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
