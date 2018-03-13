import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToMany,
  JoinTable
} from "typeorm";
import { User } from "./User";

@Entity()
export class Channel extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column({ type: "text" })
  name: string;

  @ManyToMany(() => User, user => user.channels)
  @JoinTable({name: "channel_member"})
  users: User[];
}
