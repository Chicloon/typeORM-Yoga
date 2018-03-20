import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToMany,
  JoinTable,
  OneToMany
} from "typeorm";
import { User } from "./User";
import { Message } from "./Message";

@Entity()
export class Channel extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column({ type: "text" })
  name: string;

  @ManyToMany(() => User, {})
  @JoinTable({ name: "channel_member" })
  users: User[];

  @OneToMany(() => Message, message => message.channel)
  messages: Message[];
}
