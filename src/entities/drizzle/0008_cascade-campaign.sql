ALTER TABLE "dnd_tracker"."campaigns" DROP CONSTRAINT "campaigns_creatorId_users_id_fk";
--> statement-breakpoint
ALTER TABLE "dnd_tracker"."users_to_campaigns" DROP CONSTRAINT "users_to_campaigns_user_id_users_id_fk";
--> statement-breakpoint
ALTER TABLE "dnd_tracker"."users_to_campaigns" DROP CONSTRAINT "users_to_campaigns_campaign_id_campaigns_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "dnd_tracker"."campaigns" ADD CONSTRAINT "campaigns_creatorId_users_id_fk" FOREIGN KEY ("creatorId") REFERENCES "dnd_tracker"."users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "dnd_tracker"."users_to_campaigns" ADD CONSTRAINT "users_to_campaigns_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "dnd_tracker"."users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "dnd_tracker"."users_to_campaigns" ADD CONSTRAINT "users_to_campaigns_campaign_id_campaigns_id_fk" FOREIGN KEY ("campaign_id") REFERENCES "dnd_tracker"."campaigns"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
