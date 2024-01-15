import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  AfterInsert,
  AfterRemove,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @AfterInsert()
  logInsert() {
    console.log(`User created with id ${this.id}`);
  }

  @AfterRemove()
  logRemoved() {
    console.log(`User deleted with id ${this.id}`);
  }
}
