import { IUser } from "@/entities";
import { JwtPayload } from "jsonwebtoken";

export interface TokenPayload extends Omit<IUser, "passwordHash">, JwtPayload {}
