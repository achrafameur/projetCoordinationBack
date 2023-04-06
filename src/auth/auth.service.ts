import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../users/entities/user.entity';
import { Model } from 'mongoose';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private usersService: Model<UserDocument>,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne({ username });
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    throw new UnauthorizedException();
  }
}
