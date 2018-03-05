import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
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
