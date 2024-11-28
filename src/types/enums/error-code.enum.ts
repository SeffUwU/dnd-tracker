export enum ErrorCode {
  UsernameTaken = 'username_taken',
  NotAuthorized = 'not_authorized',
  TokenExpired = 'token_expired',
  UserNotFound = 'user_not_found',
  CampaignNotFound = 'campaign_not_found',
  CampaignCodeMustNotBeEmpty = 'campaign_code_must_not_be_empty',
  CreatorCantJoinHisOwnCampaign = 'creator_cant_join_his_own_campaign',
  CampaignAlreadyJoined = 'campaign_already_joined',
  InternalServerError = 'internal_server_error',
}
