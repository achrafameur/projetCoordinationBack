import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './entities/user.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Roles } from './roles';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.UserModel(createUserDto);
    createdUser.role = Roles.USER;
    return createdUser.save();
  }

  findAll(): Promise<User[]> {
    return this.UserModel.find().exec();
  }

  findOne(id: string): Promise<User> {
    return this.UserModel.findById(id).exec();
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const existingUser = await this.UserModel.findByIdAndUpdate(
      id,
      updateUserDto,
      { new: true },
    );
    if (!existingUser) {
      throw new NotFoundException(`User with id : #${id} not found`);
    }
    return existingUser;
  }

  remove(id: string): Promise<User> {
    return this.UserModel.findByIdAndDelete(id);
  }

  findOneByUsername(username: string) {
    console.log(username);
    return this.UserModel.find({ username: username }).exec();
  }
}
