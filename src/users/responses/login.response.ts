// import { User } from '../entity/users.entity';

export interface ILoginResponse {
  // user: User;
  user: string;
  token: string;
  refreshToken: string;
}
