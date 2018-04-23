import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToMany,
  JoinTable
} from "typeorm";
import { Length } from "class-validator";
import { User } from "./User";

@Entity()
export class Channel extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column({ type: "text", unique: true })
  @Length(10, 20, { message: "Name must be unique" })
  name: string;

  @ManyToMany(() => User, {})
  @JoinTable({ name: "channel_member" })
  users: User[];

  // @ManyToMany(() => User)
  // @JoinTable({
  //   name: "channel_member",
  //   joinColumn: {
  //     name: "channel",
  //     referencedColumnName: "id"
  //   },
  //   inverseJoinColumn: {
  //     name: "user",
  //     referencedColumnName: "id"
  //   }
  // })
  // users: User[];
}
