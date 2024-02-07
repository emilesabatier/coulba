import { relations } from "drizzle-orm"
import { pgTable, text } from "drizzle-orm/pg-core"
import { dateTimeColumn } from "../../components/models/dateTime.column"
import { idColumn } from "../../components/models/id.column"
import { companyModel } from "../company/company.model"
import { userModel } from "../user/user.model"


// Model
export const yearModel = pgTable(
    "years",
    {
        id: idColumn("id").primaryKey(),
        idCompany: idColumn("id_company").references(() => companyModel.id, { onDelete: "restrict", onUpdate: "cascade" }).notNull(),
        label: text("label"),
        startingAt: dateTimeColumn("starting_at").notNull(),
        endingAt: dateTimeColumn("ending_at").notNull(),
        lastUpdatedAt: dateTimeColumn("last_updated_at").defaultNow().notNull(),
        createdAt: dateTimeColumn("created_at").defaultNow().notNull(),
        lastUpdatedBy: idColumn("last_updated_by"),
        createdBy: idColumn("created_by")
    }
)


// Relations
export const yearRelations = relations(yearModel, ({ one }) => ({
    company: one(companyModel, {
        fields: [yearModel.idCompany],
        references: [companyModel.id],
    }),
    lastUpdatedByUser: one(userModel, {
        fields: [yearModel.lastUpdatedBy],
        references: [userModel.id],
    }),
    createdByUser: one(userModel, {
        fields: [yearModel.createdBy],
        references: [userModel.id],
    })
}))
