import { relations } from "drizzle-orm"
import { boolean, numeric, pgEnum, pgTable, text } from "drizzle-orm/pg-core"
import { dateTimeColumn } from "../components/models/dateTime.column.js"
import { idColumn } from "../components/models/id.column.js"
import { recordStates } from "../components/values/recordStates.js"
import { accounts } from "./accounts.model.js"
import { attachments } from "./attachments.model.js"
import { companies } from "./companies.model.js"
import { journals } from "./journals.model.js"
import { users } from "./users.model.js"
import { years } from "./years.model.js"


// Model
export const recordStateEnum = pgEnum("record_state", recordStates)

export const records = pgTable(
    "records",
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
export const recordsRelations = relations(records, ({ one }) => ({
    company: one(companies, {
        fields: [records.idCompany],
        references: [companies.id],
    }),
    year: one(years, {
        fields: [records.idYear],
        references: [years.id],
    }),
    account: one(accounts, {
        fields: [records.idAccount],
        references: [accounts.id],
    }),
    journal: one(journals, {
        fields: [records.idJournal],
        references: [journals.id],
    }),
    attachment: one(attachments, {
        fields: [records.idAttachment],
        references: [attachments.id],
    }),
    lastUpdatedByUser: one(users, {
        fields: [records.lastUpdatedBy],
        references: [users.id],
    }),
    createdByUser: one(users, {
        fields: [records.createdBy],
        references: [users.id],
    })
}))
