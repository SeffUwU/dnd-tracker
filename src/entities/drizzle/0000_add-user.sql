CREATE SCHEMA "dnd_tracker";
--> statement-breakpoint
CREATE TYPE "dnd_tracker"."user_locale" AS ENUM('en', 'ru');--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "dnd_tracker"."users" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" varchar,
	"login" varchar,
	"passwordHash" varchar,
	"locale" "dnd_tracker"."user_locale"
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "users_id_pkey" ON "dnd_tracker"."users" USING btree ("id");