CREATE TABLE IF NOT EXISTS "dnd_tracker"."campaigns" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar NOT NULL,
	"description" text,
	"creatorId" uuid
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "dnd_tracker"."users_to_campaigns" (
	"user_id" uuid NOT NULL,
	"group_id" uuid NOT NULL,
	CONSTRAINT "users_to_campaigns_user_id_group_id_pk" PRIMARY KEY("user_id","group_id")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "dnd_tracker"."campaigns" ADD CONSTRAINT "campaigns_creatorId_users_id_fk" FOREIGN KEY ("creatorId") REFERENCES "dnd_tracker"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "dnd_tracker"."users_to_campaigns" ADD CONSTRAINT "users_to_campaigns_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "dnd_tracker"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "dnd_tracker"."users_to_campaigns" ADD CONSTRAINT "users_to_campaigns_group_id_campaigns_id_fk" FOREIGN KEY ("group_id") REFERENCES "dnd_tracker"."campaigns"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "campaigns_id_pkey" ON "dnd_tracker"."campaigns" USING btree ("id");