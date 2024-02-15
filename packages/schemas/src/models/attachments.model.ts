import { relations } from "drizzle-orm"
import { pgTable, text } from "drizzle-orm/pg-core"
import { dateTimeColumn } from "../components/models/dateTime.column.js"
import { idColumn } from "../components/models/id.column.js"
import { companies } from "./companies.model.js"
import { users } from "./users.model.js"
import { years } from "./years.model.js"


// Model
export const attachments = pgTable(
    "attachments",
    {
        id: idColumn("id").primaryKey(),
        idCompany: idColumn("id_company").references(() => companies.id, { onDelete: "restrict", onUpdate: "cascade" }).notNull(),
        idYear: idColumn("id_year").references(() => years.id, { onDelete: "restrict", onUpdate: "cascade" }).notNull(),
        reference: text("reference").notNull(),
        label: text("label"),
        lastUpdatedOn: dateTimeColumn("last_updated_on").defaultNow().notNull(),
        createdOn: dateTimeColumn("created_on").defaultNow().notNull(),
        lastUpdatedBy: idColumn("last_updated_by"),
        createdBy: idColumn("created_by")
    }
)


// Relations
export const attachmentsRelations = relations(attachments, ({ one, many }) => ({
    company: one(companies, {
        fields: [attachments.idCompany],
        references: [companies.id],
    }),
    year: one(years, {
        fields: [attachments.idYear],
        references: [years.id],
    }),
    entries: many(companies),
    lastUpdatedByUser: one(companies, {
        fields: [attachments.lastUpdatedBy],
        references: [companies.id],
    }),
    createdByUser: one(users, {
        fields: [attachments.createdBy],
        references: [users.id],
    })
}))
