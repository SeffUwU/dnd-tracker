import { ServerActionErrorMessage } from "../errors/base.error";
import { ServerActionSuccessfulMessage } from "./base.response";

export type ActionResponse<T> = Promise<
  ServerActionSuccessfulMessage<T> | ServerActionErrorMessage
>;
