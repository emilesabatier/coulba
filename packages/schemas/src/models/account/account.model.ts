import { relations } from "drizzle-orm"
import { integer, pgTable, text } from "drizzle-orm/pg-core"
import { dateTimeColumn } from "../../components/models/dateTime.column"
import { idColumn } from "../../components/models/id.column"
import { companyModel } from "../company/company.model"
import { userModel } from "../user/user.model"


// Model
export const accountModel = pgTable(
    "accounts",
    {
        id: idColumn("id").primaryKey(),
        idCompany: idColumn("id_company").references(() => companyModel.id, { onDelete: "restrict", onUpdate: "cascade" }).notNull(),
        idAccountParent: idColumn("id_account_parent"),
        label: text("label").notNull(),
        number: integer("number").notNull().unique(),
        lastUpdatedAt: dateTimeColumn("last_updated_at").defaultNow().notNull(),
        createdAt: dateTimeColumn("created_at").defaultNow().notNull(),
        lastUpdatedBy: idColumn("last_updated_by"),
        createdBy: idColumn("created_by")
    }
)


// Relations
export const accountRelations = relations(accountModel, ({ one }) => ({
    accountParent: one(accountModel, {
        fields: [accountModel.idAccountParent],
        references: [accountModel.id],
    }),
    lastUpdatedByUser: one(companyModel, {
        fields: [accountModel.lastUpdatedBy],
        references: [companyModel.id],
    }),
    createdByUser: one(userModel, {
        fields: [accountModel.createdBy],
        references: [userModel.id],
    })
}))
