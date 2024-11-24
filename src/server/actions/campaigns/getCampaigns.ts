"use server";

import { usersToCampaigns } from "@/entities";
import { protect } from "@/helpers/auth/protect.action";
import { ServerActionResponse } from "@/helpers/responses/base.response";
import { HttpStatusCode } from "@/helpers/responses/response.status";
import { ConnectionManager } from "@/server/connection.manager";
import { TokenPayload } from "@/types/jwt/token.payload.type";
import { and, eq } from "drizzle-orm";

export const getCampaigns = protect(
  async (user: TokenPayload, page?: number, take?: number) => {
    const db = ConnectionManager.getConnection();
    const foundCampaigns = await db.query.campaigns.findMany({
      with: {
        user: {
          columns: {
            id: true,
            locale: true,
            name: true,
          },
        },
        usersToCampaigns: { with: { campaign: true, user: true } },
      },
      where: (campaign, { exists, or }) =>
        or(
          eq(campaign.creatorId, user.id),
          exists(
            db
              .select()
              .from(usersToCampaigns)
              .where(
                and(
                  eq(usersToCampaigns.userId, user.id),
                  eq(usersToCampaigns.campaignId, campaign.id)
                )
              )
          )
        ),
      ...(page && take
        ? {
            offset: Math.max(page - 1, 0) * take,
            limit: take,
          }
        : {}),
    });

    return ServerActionResponse(HttpStatusCode.Ok, foundCampaigns);
  }
);
