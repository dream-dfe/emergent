CREATE TABLE IF NOT EXISTS "programmes" (
	"id" varchar(32) PRIMARY KEY NOT NULL,
	"title" varchar(250) NOT NULL,
	"intro" text NOT NULL,
	"bannerUrl" text,
	"description" text NOT NULL,
	"group" varchar(250) NOT NULL,
	"status" varchar(50) NOT NULL,
	"slug" varchar(250) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
