ALTER TABLE "dnd_tracker"."users" ALTER COLUMN "name" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "dnd_tracker"."users" ALTER COLUMN "login" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "dnd_tracker"."users" ALTER COLUMN "passwordHash" SET NOT NULL;