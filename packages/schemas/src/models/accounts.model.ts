import { relations } from "drizzle-orm"
import { integer, pgTable, text } from "drizzle-orm/pg-core"
import { dateTimeColumn } from "../components/models/dateTime.column.js"
import { idColumn } from "../components/models/id.column.js"
import { companies } from "./companies.model.js"
import { users } from "./users.model.js"
import { years } from "./years.model.js"


// Model
export const accounts = pgTable(
    "accounts",
    {
        id: idColumn("id").primaryKey(),
        idYear: idColumn("id_year").references(() => years.id, { onDelete: "restrict", onUpdate: "cascade" }).notNull(),
        idAccountParent: idColumn("id_account_parent"),
        label: text("label").notNull(),
        number: integer("number").notNull().unique(),
        lastUpdatedAt: dateTimeColumn("last_updated_at").defaultNow().notNull(),
        createdAt: dateTimeColumn("created_at").defaultNow().notNull(),
        lastUpdatedBy: idColumn("last_updated_by"),
        createdBy: idColumn("created_by")
    }
)


// Relations
export const accountsRelations = relations(accounts, ({ one }) => ({
    year: one(years, {
        fields: [accounts.idYear],
        references: [years.id],
    }),
    accountParent: one(accounts, {
        fields: [accounts.idAccountParent],
        references: [accounts.id],
    }),
    lastUpdatedByUser: one(companies, {
        fields: [accounts.lastUpdatedBy],
        references: [companies.id],
    }),
    createdByUser: one(users, {
        fields: [accounts.createdBy],
        references: [users.id],
    })
}))
