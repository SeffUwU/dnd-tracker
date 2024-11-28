import { ErrorCode } from '@/types/enums/error-code.enum';

export const RussianErrorMessages: Record<ErrorCode, string> = {
  [ErrorCode.UsernameTaken]: 'Данное имя уже занято',
  [ErrorCode.NotAuthorized]: 'Не авторизован',
  [ErrorCode.TokenExpired]: 'Сессия устарела',
  [ErrorCode.UserNotFound]: 'Пользователь не найден',
  [ErrorCode.CampaignCodeMustNotBeEmpty]: 'КОд кампании не должен быть пустой.',
  [ErrorCode.CreatorCantJoinHisOwnCampaign]: 'Владелец кампании не может вступить.',
  [ErrorCode.CampaignAlreadyJoined]: 'Вы уже являетесь частью этой кампании.',
  [ErrorCode.CampaignNotFound]: 'Кампания не найдена.',
  [ErrorCode.InternalServerError]: 'Произошла серверная ошибка. Свяжитесь с НАМИ если это будет продолжаться.',
};
