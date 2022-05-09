import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { validationNullORundefined } from 'src/share/utils/validation.util';
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
    console.log(dto);
    await this.userRepository.save(dto);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async login(dto: LoginDto): Promise<ILoginResponse> {
    const user: User | undefined = await this.userRepository.findOne({
      id: dto.id,
    });

    if (validationNullORundefined(user)) {
      throw new UnauthorizedException(
        '아이디 또는 패스워드가 일치하지 않습니다.',
      );
    }

    const token: string = this.tokenService.makeAccessToken(user.id);
    const refreshToken: string = this.tokenService.makeRefreshToken(user.id);

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
