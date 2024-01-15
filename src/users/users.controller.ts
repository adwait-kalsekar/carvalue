import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { UserDto } from './dto/user.dto';

@Serialize(UserDto)
@Controller('auth')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('signup')
  createUser(@Body() body: CreateUserDto): Promise<User> {
    return this.usersService.createUser(body);
  }

  @Get('users')
  getAllUsers(): Promise<User[]> {
    console.log('Handler');
    return this.usersService.getUsers();
  }

  @Get('user/:id')
  findOneUser(@Param() id: string): Promise<User> {
    return this.usersService.findOneUser(parseInt(id));
  }
}
