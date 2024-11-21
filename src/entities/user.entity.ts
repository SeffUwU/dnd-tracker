import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Base } from "./common/base.entity";

@Entity()
export class User extends Base {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  passwordHash: string;
}
