import { IUser } from "@/entities";

export interface TokenPayload extends Omit<IUser, "passwordHash"> {}
