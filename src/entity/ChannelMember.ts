import {
  Entity,
  Column,
  BaseEntity,
  PrimaryColumn,
  OneToOne,
  JoinColumn
} from "typeorm";
import { User } from "./User";
import { Channel } from "./Channel";

@Entity()
export class ChannelMember extends BaseEntity {
  @Column({ type: "text", default: "user" })
  role: string;

  @PrimaryColumn({ type: "int" })
  userId: number;

  @PrimaryColumn({ type: "int" })
  channelId: number;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @OneToOne(() => Channel)
  @JoinColumn()
  channel: Channel;
}
