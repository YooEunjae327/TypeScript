import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/users.entity';
import { UserRepository } from './repository/users.repository';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: UserRepository,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }
}
