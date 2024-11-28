'use server';

import { campaigns, usersToCampaigns } from '@/entities';
import { protect } from '@/helpers/auth/protect.action';
import { ServerActionError } from '@/helpers/errors/base.error';
import { ServerActionResponse } from '@/helpers/responses/base.response';
import { HttpStatusCode } from '@/helpers/responses/response.status';
import { db } from '@/server/database';
import { ErrorCode } from '@/types/enums/error-code.enum';
import { eq } from 'drizzle-orm';

export const joinCampaign = protect(async (requestUser, code: string) => {
  if (!code || !code.length) {
    return ServerActionError(HttpStatusCode.BadRequest, ErrorCode.CampaignCodeMustNotBeEmpty, requestUser.uiLocale);
  }

  const foundCampaign = await db.query.campaigns.findFirst({
    where: eq(campaigns.inviteCode, code),
    with: {
      usersToCampaigns: {
        with: {
          user: {
            columns: { id: true },
          },
        },
      },
    },
  });

  if (!foundCampaign) {
    return ServerActionError(HttpStatusCode.NotFound, ErrorCode.CampaignNotFound, requestUser.uiLocale);
  }

  if (foundCampaign.creatorId === requestUser.id) {
    return ServerActionError(HttpStatusCode.Conflict, ErrorCode.CreatorCantJoinHisOwnCampaign, requestUser.uiLocale);
  }

  if (foundCampaign.usersToCampaigns.some(({ user }) => requestUser.id === user.id)) {
    return ServerActionError(HttpStatusCode.Conflict, ErrorCode.CampaignAlreadyJoined, requestUser.uiLocale);
  }

  await db.insert(usersToCampaigns).values({
    campaignId: foundCampaign.id,
    userId: requestUser.id,
  });

  return ServerActionResponse(HttpStatusCode.Ok, { campaignId: foundCampaign.id });
});
