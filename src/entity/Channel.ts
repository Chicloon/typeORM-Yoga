import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToMany,
  JoinTable,
  OneToMany
} from "typeorm";
import { Length } from "class-validator";
import { User } from "./User";
import { Message } from "./Message";

@Entity()
export class Channel extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column({ type: "text", unique: true })
  @Length(10, 20, { message: "Name must be unique" })
  name: string;

  @ManyToMany(() => User, {})
  @JoinTable({ name: "channel_member" })
  users: User[];

  @OneToMany(() => Message, message => message.channel)
  messages: Message[];
}
