import { User } from '../entity/users.entity';

export interface ILoginResponse {
  // user: string;
  user: User;
  token: string;
  refreshToken: string;
}
