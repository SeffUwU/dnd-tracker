import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Base } from "./common/base.entity";
import { AllowedLocale } from "@/locale/error.messages";

@Entity()
export class User extends Base {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  login: string;

  @Column()
  passwordHash: string;

  @Column({
    enum: AllowedLocale,
    default: AllowedLocale.en,
  })
  locale: string;
}
