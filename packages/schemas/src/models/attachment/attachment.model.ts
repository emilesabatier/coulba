import { relations } from "drizzle-orm"
import { pgTable, text } from "drizzle-orm/pg-core"
import { dateTimeColumn } from "../../components/models/dateTime.column.js"
import { idColumn } from "../../components/models/id.column.js"
import { companyModel } from "../company/company.model.js"
import { userModel } from "../user/user.model.js"


// Model
export const attachmentModel = pgTable(
    "attachments",
    {
        id: idColumn("id").primaryKey(),
        idCompany: idColumn("id_company").references(() => companyModel.id, { onDelete: "restrict", onUpdate: "cascade" }).notNull(),
        reference: text("reference").notNull(),
        label: text("label"),
        lastUpdatedAt: dateTimeColumn("last_updated_at").defaultNow().notNull(),
        createdAt: dateTimeColumn("created_at").defaultNow().notNull(),
        lastUpdatedBy: idColumn("last_updated_by"),
        createdBy: idColumn("created_by")
    }
)


// Relations
export const attachmentRelations = relations(attachmentModel, ({ one, many }) => ({
    company: one(companyModel, {
        fields: [attachmentModel.idCompany],
        references: [companyModel.id],
    }),
    entries: many(companyModel),
    lastUpdatedByUser: one(companyModel, {
        fields: [attachmentModel.lastUpdatedBy],
        references: [companyModel.id],
    }),
    createdByUser: one(userModel, {
        fields: [attachmentModel.createdBy],
        references: [userModel.id],
    })
}))
