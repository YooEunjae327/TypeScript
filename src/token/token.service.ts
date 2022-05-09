import {
  BadRequestException,
  GoneException,
  Injectable,
  InternalServerErrorException,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService, JwtSignOptions } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { IToken, ITokenPayload } from 'src/share/interface/IToken';
import {
  JWT_ACCESS_SUBJECT,
  JWT_ISSUER,
  JWT_REFRESH_SUBJECT,
} from 'src/share/constants/token.constant';
import RemakeDto from './dto/remake.dto';

@Injectable()
export class TokenService {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  private makePayload(id: string): ITokenPayload {
    return { id };
  }

  public makeAccessToken(id: string): string {
    const paylaod: ITokenPayload = this.makePayload(id);

    const option: JwtSignOptions = {
      // expiresIn: this.configService.get('JWT_ACCESS_EXPIRE'),
      expiresIn: '5s',
      issuer: JWT_ISSUER,
      subject: JWT_ACCESS_SUBJECT,
    };

    return this.jwtService.sign(paylaod, option);
  }

  public makeRefreshToken(id: string): string {
    const paylaod: ITokenPayload = this.makePayload(id);

    const option: JwtSignOptions = {
      // expiresIn: this.configService.get('JWT_REFRESH_EXPIRE'),
      expiresIn: '10s',
      issuer: JWT_ISSUER,
      subject: JWT_REFRESH_SUBJECT,
    };

    return this.jwtService.sign(paylaod, option);
  }

  public async remakeAccessToken(dto: RemakeDto): Promise<string> {
    const { iss, sub, id }: IToken = await this.verifyToken(dto.refreshToken);

    if (iss !== JWT_ISSUER && sub !== JWT_REFRESH_SUBJECT) {
      throw new UnauthorizedException('토큰이 위조되었습니다.');
    }

    return this.makeAccessToken(id);
  }

  public async verifyToken(token: string) {
    try {
      return this.jwtService.verify(token);
    } catch (error) {
      switch (error.message) {
        case 'jwt must be provided':
          throw new BadRequestException('토큰이 전송되지 않았습니다.');
        case 'jwt malformed':
        case 'invalid token':
        case 'invalid signature':
          throw new UnauthorizedException('위조된 토큰입니다.');
        case 'jwt expired':
          throw new GoneException('토큰이 만료되었습니다.');
        default:
          Logger.error(error);
          throw new InternalServerErrorException('다시 시도해 주세요');
      }
    }
  }
}
