import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/common/guards/auth.guard';
import dataResponse from 'src/common/response/dataResponse';
import Response from 'src/common/response/response';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login-user.dto';
import { ILoginResponse } from './responses/login.response';
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
  async login(@Body() dto: LoginDto): Promise<dataResponse<ILoginResponse>> {
    const loginRes: ILoginResponse = await this.userService.login(dto);
    return dataResponse.dataSuccess('로그인 성공', loginRes);
  }

  @UseGuards(AuthGuard)
  @Get('/test')
  async test() {
    await this.userService.test();
    return Response.success('testing');
  }
}
