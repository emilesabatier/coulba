import { relations } from "drizzle-orm"
import { pgTable, text } from "drizzle-orm/pg-core"
import { dateTimeColumn } from "../components/models/dateTime.column.js"
import { idColumn } from "../components/models/id.column.js"
import { companies } from "./companies.model.js"
import { users } from "./users.model.js"


// Model
export const journals = pgTable(
    "journals",
    {
        id: idColumn("id").primaryKey(),
        idCompany: idColumn("id_company").references(() => companies.id, { onDelete: "restrict", onUpdate: "cascade" }).notNull(),
        acronym: text("acronym").notNull(),
        label: text("label").notNull(),
        lastUpdatedOn: dateTimeColumn("last_updated_on").defaultNow().notNull(),
        createdOn: dateTimeColumn("created_on").defaultNow().notNull(),
        lastUpdatedBy: idColumn("last_updated_by"),
        createdBy: idColumn("created_by")
    }
)


// Relations
export const journalsRelations = relations(journals, ({ one }) => ({
    company: one(companies, {
        fields: [journals.idCompany],
        references: [companies.id],
    }),
    lastUpdatedByUser: one(users, {
        fields: [journals.lastUpdatedBy],
        references: [users.id],
    }),
    createdByUser: one(users, {
        fields: [journals.createdBy],
        references: [users.id],
    })
}))
