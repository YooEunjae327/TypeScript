import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import Response from 'src/common/response/response';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login-user.dto';
import { UserService } from './users.service';

@Controller('/users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @HttpCode(200)
  @Post('/register')
  async register(@Body() dto: CreateUserDto): Promise<Response> {
    await this.userService.register(dto);

    return Response.success('회원가입 성공');
  }

  @Post('/login')
  async login(@Body() dto: LoginDto);
}
