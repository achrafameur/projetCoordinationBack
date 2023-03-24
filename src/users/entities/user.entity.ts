import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsEmail,IsNotEmpty } from 'class-validator';
import { HydratedDocument } from 'mongoose'

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
    
    @Prop()
    id: number ;

    @Prop()
    static username: string;
  
    @Prop()
    @IsEmail()
    email: string;
  
    @Prop()
    @IsNotEmpty()
    password: string;

}

export const UserSchema  = SchemaFactory.createForClass(User)