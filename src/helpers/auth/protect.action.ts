import { checkAuth } from "@/server/actions/auth/check-auth";
import { TokenPayload } from "@/types/jwt/token.payload.type";
import { ParametersExceptFirst } from "@/types/utils/utils.types";
import { ActionResponse } from "../responses/response.type";
import { ServerActionErrorMessage } from "../errors/base.error";

/**
 * Protects a server action by checking the token before executing the main function.
 *
 * Acts as a wrapper.
 *
 * Note: The wrapped function HAS to be async!
 *
 * @example
 *
 * 'use server'
 *
 * const protectedAction = protect(async () => console.log('Action is protected!'))
 *
 * export { protectedAction }
 *
 * @param fn - an action to wrap! MUST ACCEPT USER ARE FIRST PARAMETER!
 *
 * @returns - a wrapped function.
 */
export function protect<T extends (user: TokenPayload, ...args: any[]) => any>(
  fn: T
): (
  ...args: ParametersExceptFirst<T>
) => Promise<Awaited<ReturnType<T>> | ServerActionErrorMessage> {
  return async (
    ...params: ParametersExceptFirst<T>
  ): Promise<ServerActionErrorMessage | Awaited<ReturnType<T>>> => {
    const result = await checkAuth();

    if (result.is_error) {
      return result;
    }

    return fn(result.value.user, ...params);
  };
}
