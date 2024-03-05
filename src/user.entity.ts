import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Vipul')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;


  @Column({ default: true })
  message: string;
}