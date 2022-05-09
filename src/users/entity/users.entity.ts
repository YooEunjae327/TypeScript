import { Column, Entity, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn()
  id: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  testing: string;
}
