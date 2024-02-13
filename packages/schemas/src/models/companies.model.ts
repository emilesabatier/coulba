import { relations } from "drizzle-orm"
import { pgTable, text } from "drizzle-orm/pg-core"
import { dateTimeColumn } from "../components/models/dateTime.column.js"
import { idColumn } from "../components/models/id.column.js"
import { users } from "./users.model.js"


// Model
export const companies = pgTable(
    "companies",
    {
        id: idColumn("id").primaryKey(),
        siren: text("siren").notNull().unique(),
        name: text("name").notNull(),
        lastUpdatedAt: dateTimeColumn("last_updated_at").defaultNow().notNull(),
        createdAt: dateTimeColumn("created_at").defaultNow().notNull(),
        lastUpdatedBy: idColumn("last_updated_by"),
        createdBy: idColumn("created_by")
    }
)


// Relations
export const companiesRelations = relations(companies, ({ one }) => ({
    lastUpdatedByUser: one(users, {
        fields: [companies.lastUpdatedBy],
        references: [users.id],
    }),
    createdByUser: one(users, {
        fields: [companies.createdBy],
        references: [users.id],
    })
}))
