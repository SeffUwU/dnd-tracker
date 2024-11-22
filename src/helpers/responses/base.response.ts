import { HttpStatusCode } from "./response.status";

export interface ServerActionSuccessfulMessage<Value> {
  status: HttpStatusCode;
  value: Value;
  is_error: false;
}

export function ServerActionResponse<
  Value extends object | string | number | boolean
>(status: HttpStatusCode, value: Value): ServerActionSuccessfulMessage<Value> {
  return {
    status,
    value:
      typeof value === "object" &&
      "toJSON" in value &&
      typeof value.toJSON === "function"
        ? value.toJSON()
        : value,
    is_error: false,
  };
}
