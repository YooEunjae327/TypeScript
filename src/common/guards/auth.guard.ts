import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { validationNullORundefined } from 'src/share/utils/validation.util';
import { TokenService } from 'src/token/token.service';
import { UserService } from 'src/users/users.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly userService: UserService,
    private readonly tokenService: TokenService,
  ) {}

  public async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();

    const token: string = await req.headers['authorization'];
    console.log(token);

    return true;
  }
}
