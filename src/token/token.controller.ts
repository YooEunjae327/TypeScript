import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import dataResponse from 'src/common/response/dataResponse';
import RemakeDto from './dto/remake.dto';
import { TokenService } from './token.service';

@Controller('token')
export class TokenController {
  constructor(private readonly tokenService: TokenService) {}

  @HttpCode(200)
  @Post('/refresh')
  async remakeToken(@Body() dto: RemakeDto) {
    const token: string = await this.tokenService.remakeAccessToken(dto);
    return dataResponse.dataSuccess('토큰이 재발급 되었습니다.', token);
  }
}
