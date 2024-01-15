import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  async createUser(userInfo: CreateUserDto): Promise<User> {
    const { email, password } = userInfo;
    const user = this.repo.create({ email, password });
    await this.repo.save(user);
    return user;
  }

  async getUsers(): Promise<User[]> {
    const users = await this.repo.find();
    return users;
  }

  async findOneUser(id: number): Promise<User> {
    return await this.repo.findOneBy({ id });
  }
}
