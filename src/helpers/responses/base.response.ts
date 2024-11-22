import { HttpStatusCode } from "./response.status";

export interface ServerActionSuccessfulMessage<Value> {
  status: HttpStatusCode;
  value: Value;
  is_error: false;
}

export function ServerActionResponse<Value extends object>(
  status: HttpStatusCode,
  value: Value
): ServerActionSuccessfulMessage<Value> {
  return {
    status,
    value:
      "toJSON" in value && typeof value.toJSON === "function"
        ? value.toJSON()
        : value,
    is_error: false,
  };
}
