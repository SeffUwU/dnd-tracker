import { ErrorCode } from '@/types/enums/error-code.enum';

export const EnglishErrorMessages: Record<ErrorCode, string> = {
  [ErrorCode.UsernameTaken]: 'Username taken',
  [ErrorCode.NotAuthorized]: 'Not authorized',
  [ErrorCode.TokenExpired]: 'Session expired',
  [ErrorCode.UserNotFound]: 'User not found',
};
