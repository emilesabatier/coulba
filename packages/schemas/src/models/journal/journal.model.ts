import { relations } from "drizzle-orm"
import { pgTable, text } from "drizzle-orm/pg-core"
import { dateTimeColumn } from "../../components/models/dateTime.column.js"
import { idColumn } from "../../components/models/id.column.js"
import { companyModel } from "../company/company.model.js"
import { userModel } from "../user/user.model.js"


// Model
export const journalModel = pgTable(
    "journals",
    {
        id: idColumn("id").primaryKey(),
        idCompany: idColumn("id_company").references(() => companyModel.id, { onDelete: "restrict", onUpdate: "cascade" }).notNull(),
        acronym: text("acronym").notNull(),
        label: text("label").notNull(),
        lastUpdatedAt: dateTimeColumn("last_updated_at").defaultNow().notNull(),
        createdAt: dateTimeColumn("created_at").defaultNow().notNull(),
        lastUpdatedBy: idColumn("last_updated_by"),
        createdBy: idColumn("created_by")
    }
)


// Relations
export const journalRelations = relations(journalModel, ({ one }) => ({
    company: one(companyModel, {
        fields: [journalModel.idCompany],
        references: [companyModel.id],
    }),
    lastUpdatedByUser: one(userModel, {
        fields: [journalModel.lastUpdatedBy],
        references: [userModel.id],
    }),
    createdByUser: one(userModel, {
        fields: [journalModel.createdBy],
        references: [userModel.id],
    })
}))
