ALTER TABLE "dnd_tracker"."users_to_campaigns" RENAME COLUMN "group_id" TO "campaign_id";--> statement-breakpoint
ALTER TABLE "dnd_tracker"."users_to_campaigns" DROP CONSTRAINT "users_to_campaigns_group_id_campaigns_id_fk";
--> statement-breakpoint
ALTER TABLE "dnd_tracker"."users_to_campaigns" DROP CONSTRAINT "users_to_campaigns_user_id_group_id_pk";--> statement-breakpoint
ALTER TABLE "dnd_tracker"."users_to_campaigns" ADD CONSTRAINT "users_to_campaigns_user_id_campaign_id_pk" PRIMARY KEY("user_id","campaign_id");--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "dnd_tracker"."users_to_campaigns" ADD CONSTRAINT "users_to_campaigns_campaign_id_campaigns_id_fk" FOREIGN KEY ("campaign_id") REFERENCES "dnd_tracker"."campaigns"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
