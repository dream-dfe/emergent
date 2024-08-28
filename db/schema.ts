import { integer, text, boolean, pgTable, varchar, timestamp } from "drizzle-orm/pg-core";
import { cuid2 } from "drizzle-cuid2/postgres";

export const programmes = pgTable("programmes", {
  id: cuid2("id").defaultRandom().primaryKey(),
  title: varchar("title", { length: 250 }).notNull(),
  intro: text("intro").notNull(),
  bannerUrl: text("bannerUrl"),
  description: text("description").notNull(),
  group: varchar("group", { length: 250 }).notNull(),
  status: varchar("status", { length: 50 }).notNull(),
  slug: varchar("slug", { length: 250 }).notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow()
});
