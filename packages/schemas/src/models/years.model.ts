import { relations } from "drizzle-orm"
import { pgTable, text } from "drizzle-orm/pg-core"
import { dateTimeColumn } from "../components/models/dateTime.column.js"
import { idColumn } from "../components/models/id.column.js"
import { companies } from "./companies.model.js"
import { users } from "./users.model.js"


// Model
export const years = pgTable(
    "years",
    {
        id: idColumn("id").primaryKey(),
        idCompany: idColumn("id_company").references(() => companies.id, { onDelete: "restrict", onUpdate: "cascade" }).notNull(),
        label: text("label"),
        startingAt: dateTimeColumn("starting_at").notNull(),
        endingAt: dateTimeColumn("ending_at").notNull(),
        lastUpdatedAt: dateTimeColumn("last_updated_at").defaultNow().notNull(),
        createdAt: dateTimeColumn("created_at").defaultNow().notNull(),
        lastUpdatedBy: idColumn("last_updated_by"),
        createdBy: idColumn("created_by")
    }
)


// Relations
export const yearsRelations = relations(years, ({ one }) => ({
    company: one(companies, {
        fields: [years.idCompany],
        references: [companies.id],
    }),
    lastUpdatedByUser: one(users, {
        fields: [years.lastUpdatedBy],
        references: [users.id],
    }),
    createdByUser: one(users, {
        fields: [years.createdBy],
        references: [users.id],
    })
}))
