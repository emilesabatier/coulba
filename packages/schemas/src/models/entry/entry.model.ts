import { relations } from "drizzle-orm"
import { numeric, pgEnum, pgTable, text } from "drizzle-orm/pg-core"
import { entryStates } from "../../components/index.js"
import { dateTimeColumn } from "../../components/models/dateTime.column.js"
import { idColumn } from "../../components/models/id.column.js"
import { accountModel } from "../account/account.model.js"
import { attachmentModel } from "../attachment/attachment.model.js"
import { companyModel } from "../company/company.model.js"
import { journalModel } from "../journal/journal.model.js"
import { userModel } from "../user/user.model.js"


// Model
export const entryStateEnum = pgEnum("entry_state", entryStates)

export const entryModel = pgTable(
    "entries",
    {
        id: idColumn("id").primaryKey(),
        idCompany: idColumn("id_company").references(() => companyModel.id, { onDelete: "restrict", onUpdate: "cascade" }).notNull(),
        idAccount: idColumn("id_account").references(() => accountModel.id, { onDelete: "restrict", onUpdate: "cascade" }).notNull(),
        idJournal: idColumn("id_journal").references(() => journalModel.id, { onDelete: "set null", onUpdate: "cascade" }),
        idAttachment: idColumn("id_attachment").references(() => attachmentModel.id, { onDelete: "set null", onUpdate: "cascade" }),
        state: entryStateEnum("state").notNull(),
        label: text("label").notNull(),
        date: dateTimeColumn("date").notNull(),
        debit: numeric("debit", { scale: 2 }).notNull(),
        credit: numeric("credit", { scale: 2 }).notNull(),
        lastUpdatedAt: dateTimeColumn("last_updated_at").defaultNow().notNull(),
        createdAt: dateTimeColumn("created_at").defaultNow().notNull(),
        lastUpdatedBy: idColumn("last_updated_by"),
        createdBy: idColumn("created_by")
    }
)


// Relations
export const entryRelations = relations(entryModel, ({ one }) => ({
    company: one(companyModel, {
        fields: [entryModel.idCompany],
        references: [companyModel.id],
    }),
    account: one(accountModel, {
        fields: [entryModel.idAccount],
        references: [accountModel.id],
    }),
    journal: one(journalModel, {
        fields: [entryModel.idJournal],
        references: [journalModel.id],
    }),
    attachment: one(attachmentModel, {
        fields: [entryModel.idAttachment],
        references: [attachmentModel.id],
    }),
    lastUpdatedByUser: one(userModel, {
        fields: [entryModel.lastUpdatedBy],
        references: [userModel.id],
    }),
    createdByUser: one(userModel, {
        fields: [entryModel.createdBy],
        references: [userModel.id],
    })
}))
