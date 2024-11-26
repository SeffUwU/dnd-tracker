'use server';

import { usersToCampaigns } from '@/entities';
import { protect } from '@/helpers/auth/protect.action';
import { ServerActionError } from '@/helpers/errors/base.error';
import { ServerActionResponse } from '@/helpers/responses/base.response';
import { HttpStatusCode } from '@/helpers/responses/response.status';
import { db } from '@/server/database';
import { ErrorCode } from '@/types/enums/error-code.enum';
import { TokenPayload } from '@/types/jwt/token.payload.type';
import { eq } from 'drizzle-orm';

export const getCampaign = protect(async (user: TokenPayload, campaignId: string) => {
  const foundCampaigns = await db.query.campaigns.findMany({
    with: {
      user: {
        columns: {
          id: true,
          locale: true,
          name: true,
        },
      },
      usersToCampaigns: {
        with: {
          campaign: true,
          user: {
            columns: {
              id: true,
              name: true,
              createdAt: true,
            },
          },
        },
      },
    },
    where: (campaign, { exists, or, and }) =>
      and(
        eq(campaign.id, campaignId),
        or(
          eq(campaign.creatorId, user.id),
          exists(
            db
              .select()
              .from(usersToCampaigns)
              .where(and(eq(usersToCampaigns.userId, user.id), eq(usersToCampaigns.campaignId, campaign.id))),
          ),
        ),
      ),
  });

  if (!foundCampaigns[0]) {
    return ServerActionError(HttpStatusCode.NotFound, ErrorCode.CampaignNotFound);
  }

  return ServerActionResponse(HttpStatusCode.Ok, {
    ...foundCampaigns[0],
    madeByYou: foundCampaigns[0].creatorId === user.id,
  });
});
