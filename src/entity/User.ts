import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToMany,
  JoinTable,
  OneToMany
} from "typeorm";
import { Channel } from "./Channel";
import { Message } from "./Message";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column({ type: "text" })
  email: string;

  @Column({ type: "boolean", default: false })
  confirmed: boolean;

  @Column({ type: "text" })
  name: string;

  @Column({ type: "varchar", length: "230" })
  password: string;

  @ManyToMany(() => Channel)
  @JoinTable({ name: "channel_member" })
  channels: Channel[];

  @OneToMany(() => Message, message => message.user)
  messages: Message[];
}
