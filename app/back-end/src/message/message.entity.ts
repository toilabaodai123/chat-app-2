import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @Column()
  entity_id: number;

  @Column()
  entity_type: string;

  @Column()
  user_id: number;

  @Column({ type: 'bigint' })
  created_at: number;
}