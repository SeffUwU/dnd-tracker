import { checkAuth } from "@/server/actions/auth/check-auth";
import { ServerActionErrorMessage } from "../errors/base.error";
import { ActionResponse } from "../responses/response.type";

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
 * @param fn - an action to wrap!
 *
 * @returns - a wrapped function.
 */
export function protect<T extends (...args: any[]) => any>(
  fn: T
): (...args: Parameters<T>) => ActionResponse<ReturnType<T>> {
  return async (...params: Parameters<T>): ActionResponse<ReturnType<T>> => {
    const result = await checkAuth();

    if (result.is_error) {
      return result;
    }

    return fn(...params);
  };
}
