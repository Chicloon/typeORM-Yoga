import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class User extends BaseEntity{
  @PrimaryGeneratedColumn() id: number;

  @Column({ type: "text" })
  email: string;

  @Column({ type: "boolean", default: false })
  confirmed: boolean;

  @Column({ type: "text" })
  name: string;

  @Column({ type: "varchar", length: "230" })
  password: string;
}
