import { relations } from "drizzle-orm"
import { integer, pgTable, text, unique } from "drizzle-orm/pg-core"
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
        storageKey: text("storage_key").notNull(),
        type: text("type").notNull(),
        size: integer("size").notNull(),
        lastUpdatedOn: dateTimeColumn("last_updated_on").defaultNow().notNull(),
        createdOn: dateTimeColumn("created_on").defaultNow().notNull(),
        lastUpdatedBy: idColumn("last_updated_by").references(() => users.id, { onDelete: "set null", onUpdate: "cascade" }),
        createdBy: idColumn("created_by").references(() => users.id, { onDelete: "set null", onUpdate: "cascade" }),
    },
    (t) => ({
        uniqueConstraint: unique().on(t.reference, t.idYear, t.idCompany)
    })
)


// Relations
export const attachmentsRelations = relations(attachments, ({ one, many }) => ({
    year: one(years, {
        fields: [attachments.idYear],
        references: [years.id],
    }),
    records: many(companies)
}))
