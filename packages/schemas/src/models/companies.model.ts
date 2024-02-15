import { relations } from "drizzle-orm"
import { pgTable, text } from "drizzle-orm/pg-core"
import { dateTimeColumn } from "../components/models/dateTime.column.js"
import { idColumn } from "../components/models/id.column.js"
import { users } from "./users.model.js"
import { years } from "./years.model.js"


// Model
export const companies = pgTable(
    "companies",
    {
        id: idColumn("id").primaryKey(),
        idYear: idColumn("id_year"),
        siren: text("siren").notNull().unique(),
        name: text("name").notNull(),
        lastUpdatedOn: dateTimeColumn("last_updated_on").defaultNow().notNull(),
        createdOn: dateTimeColumn("created_on").defaultNow().notNull(),
        lastUpdatedBy: idColumn("last_updated_by"),
        createdBy: idColumn("created_by")
    }
)


// Relations
export const companiesRelations = relations(companies, ({ one }) => ({
    year: one(years, {
        fields: [companies.idYear],
        references: [years.id],
    }),
    lastUpdatedByUser: one(users, {
        fields: [companies.lastUpdatedBy],
        references: [users.id],
    }),
    createdByUser: one(users, {
        fields: [companies.createdBy],
        references: [users.id],
    })
}))
