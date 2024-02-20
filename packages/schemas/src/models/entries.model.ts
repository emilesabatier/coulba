import { relations } from "drizzle-orm"
import { boolean, numeric, pgEnum, pgTable, text } from "drizzle-orm/pg-core"
import { dateTimeColumn } from "../components/models/dateTime.column.js"
import { idColumn } from "../components/models/id.column.js"
import { entryStates } from "../components/values/entryStates.js"
import { accounts } from "./accounts.model.js"
import { attachments } from "./attachments.model.js"
import { companies } from "./companies.model.js"
import { journals } from "./journals.model.js"
import { users } from "./users.model.js"
import { years } from "./years.model.js"


// Model
export const entryStateEnum = pgEnum("entry_state", entryStates)

export const entries = pgTable(
    "entries",
    {
        id: idColumn("id").primaryKey(),
        idCompany: idColumn("id_company").references(() => companies.id, { onDelete: "restrict", onUpdate: "cascade" }).notNull(),
        idYear: idColumn("id_year").references(() => years.id, { onDelete: "restrict", onUpdate: "cascade" }).notNull(),
        idAccount: idColumn("id_account").references(() => accounts.id, { onDelete: "restrict", onUpdate: "cascade" }).notNull(),
        idJournal: idColumn("id_journal").references(() => journals.id, { onDelete: "set null", onUpdate: "cascade" }),
        idAttachment: idColumn("id_attachment").references(() => attachments.id, { onDelete: "set null", onUpdate: "cascade" }),
        isConfirmed: boolean("is_confirmed").notNull(),
        label: text("label").notNull(),
        date: dateTimeColumn("date").notNull(),
        debit: numeric("debit", { scale: 2 }).notNull(),
        credit: numeric("credit", { scale: 2 }).notNull(),
        lastUpdatedOn: dateTimeColumn("last_updated_on").defaultNow().notNull(),
        createdOn: dateTimeColumn("created_on").defaultNow().notNull(),
        lastUpdatedBy: idColumn("last_updated_by"),
        createdBy: idColumn("created_by")
    }
)


// Relations
export const entriesRelations = relations(entries, ({ one }) => ({
    company: one(companies, {
        fields: [entries.idCompany],
        references: [companies.id],
    }),
    year: one(years, {
        fields: [entries.idYear],
        references: [years.id],
    }),
    account: one(accounts, {
        fields: [entries.idAccount],
        references: [accounts.id],
    }),
    journal: one(journals, {
        fields: [entries.idJournal],
        references: [journals.id],
    }),
    attachment: one(attachments, {
        fields: [entries.idAttachment],
        references: [attachments.id],
    }),
    lastUpdatedByUser: one(users, {
        fields: [entries.lastUpdatedBy],
        references: [users.id],
    }),
    createdByUser: one(users, {
        fields: [entries.createdBy],
        references: [users.id],
    })
}))
