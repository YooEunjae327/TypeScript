import { Injectable } from '@nestjs/common';
import { JwtService, JwtSignOptions } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { ITokenPayload } from 'src/share/interface/IToken';
import {
  JWT_ACCESS_SUBJECT,
  JWT_ISSUER,
} from 'src/share/constants/token.constant';

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

    const option : JwtSignOptions = {
      expiresIn: this.configService.get('JWT_ACCESS_EXPIRE'),
      issuer: JWT_ISSUER,
      subject: JWT_ACCESS_SUBJECT,
    });
  }
}
