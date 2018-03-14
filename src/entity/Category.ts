import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToMany,
  JoinTable
} from "typeorm";
import { Question } from "./Question";

@Entity()
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column() name: string;

  @ManyToMany(() => Question)
  @JoinTable({ name: "category_question" })
  questions: Category[];
}
