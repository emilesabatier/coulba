import { relations } from "drizzle-orm"
import { pgTable, text } from "drizzle-orm/pg-core"
import { dateTimeColumn } from "../../components/models/dateTime.column"
import { idColumn } from "../../components/models/id.column"
import { userModel } from "../user/user.model"


// Model
export const companyModel = pgTable(
    "companies",
    {
        id: idColumn("id").primaryKey(),
        siren: text("siren").notNull(),
        name: text("name").notNull(),
        lastUpdatedAt: dateTimeColumn("last_updated_at").defaultNow().notNull(),
        createdAt: dateTimeColumn("created_at").defaultNow().notNull(),
        lastUpdatedBy: idColumn("last_updated_by"),
        createdBy: idColumn("created_by")
    }
)


// Relations
export const companyRelations = relations(companyModel, ({ one }) => ({
    lastUpdatedByUser: one(userModel, {
        fields: [companyModel.lastUpdatedBy],
        references: [userModel.id],
    }),
    createdByUser: one(userModel, {
        fields: [companyModel.createdBy],
        references: [userModel.id],
    })
}))
