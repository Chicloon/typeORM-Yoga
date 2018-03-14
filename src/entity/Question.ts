import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  BaseEntity
} from "typeorm";
import { Category } from "./Category";

@Entity()
export class Question extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column() title: string;

  @Column() text: string;

  @ManyToMany(() => Category)
  @JoinTable({ name: "category_question" })
  categories: Category[];
}
