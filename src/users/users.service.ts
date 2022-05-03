import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TokenService } from 'src/token/token.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login-user.dto';
import { User } from './entity/users.entity';
import { UserRepository } from './repository/users.repository';
import { ILoginResponse } from './responses/login.response';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly tokenService: TokenService,
  ) {}

  async register(dto: CreateUserDto): Promise<void> {
    await this.userRepository.save(dto);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async login(dto: LoginDto): Promise<ILoginResponse> {
    const user = 'test';
    const token: string = this.tokenService.makeAccessToken('test');
    const refreshToken: string = this.tokenService.makeRefreshToken('test');

    return {
      user,
      token,
      refreshToken,
    };
  }

  async test(): Promise<any> {
    const user: User | undefined = await this.userRepository.findByUserId(
      'testing',
    );

    console.log(user);
  }
}
