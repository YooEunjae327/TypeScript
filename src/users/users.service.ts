import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entity/users.entity';
import { UserRepository } from './repository/users.repository';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: UserRepository,
  ) {}

  async register(dto: CreateUserDto): Promise<void> {
    await this.userRepository.save(dto);
  }
}
