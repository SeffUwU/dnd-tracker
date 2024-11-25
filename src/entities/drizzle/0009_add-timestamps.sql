ALTER TABLE "dnd_tracker"."campaigns" ADD COLUMN "created_at" timestamp DEFAULT now();--> statement-breakpoint
ALTER TABLE "dnd_tracker"."campaigns" ADD COLUMN "updated_at" timestamp DEFAULT now();--> statement-breakpoint
ALTER TABLE "dnd_tracker"."users_to_campaigns" ADD COLUMN "joined_at" timestamp DEFAULT now();--> statement-breakpoint
ALTER TABLE "dnd_tracker"."users" ADD COLUMN "created_at" timestamp DEFAULT now();--> statement-breakpoint
ALTER TABLE "dnd_tracker"."users" ADD COLUMN "updated_at" timestamp DEFAULT now();