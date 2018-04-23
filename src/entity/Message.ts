import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  PrimaryColumn
} from "typeorm";
import { Channel } from "./Channel";
import { User } from "./User";

@Entity()
export class Message extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @CreateDateColumn({ type: "timestamp" })
  createdAt: string;

  @Column({ type: "text" })
  text: string;

  @PrimaryColumn({ type: "int" })
  userId: number;

  @PrimaryColumn({ type: "int" })
  channelId: number;

  @ManyToOne(() => Channel, channel => channel.messages)
  channel: Channel;

  @ManyToOne(() => User, user => user.messages)
  user: User;
}
