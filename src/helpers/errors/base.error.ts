import { HttpStatusCode } from '../responses/response.status';
import { ErrorCodeMessage } from '../../locale/error.messages';
import { AllowedLocale } from '@/types/enums/allowed-locale.enum';
import { ErrorCode } from '@/types/enums/error-code.enum';

export interface ServerActionErrorMessage {
  status: HttpStatusCode;
  code: ErrorCode;
  message: string;
  locale: AllowedLocale;
  is_error: true;
}

interface ServerActionErrorFn {
  (status: HttpStatusCode, code: ErrorCode, locale?: AllowedLocale): ServerActionErrorMessage;
}

/**
 * NextJS server action doesn't support throwing errors.. so we make this "special" response with error code.
 * @param status - http status code
 * @param code - error code
 * @param locale - used to determine which language to send the error in
 * @returns ServerActionErrorMessage
 */
export const ServerActionError: ServerActionErrorFn = (status, code, locale = AllowedLocale.en) => {
  return <ServerActionErrorMessage>{
    status,
    code,
    message: ErrorCodeMessage[locale][code],
    locale,
    is_error: true,
  };
};
