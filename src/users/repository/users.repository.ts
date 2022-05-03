import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entity/users.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  public findByUserId(id: string): Promise<User | undefined> {
    return this.createQueryBuilder('user').getOne();
    // return this.findOne();
  }

  public testing(): string {
    return 'test';
  }
}
