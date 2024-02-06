import { relations } from "drizzle-orm"
import { boolean, pgTable, text } from "drizzle-orm/pg-core"
import { dateTimeColumn } from "../../components/models/dateTime.column.js"
import { idColumn } from "../../components/models/id.column.js"
import { companyModel } from "../company/company.model.js"


// Model
export const userModel = pgTable(
    "users",
    {
        id: idColumn("id").primaryKey(),
        idCompany: idColumn("id_company").references(() => companyModel.id, { onDelete: "restrict", onUpdate: "cascade" }).notNull(),
        isAdmin: boolean("is_admin").default(false).notNull(),
        forename: text("forename").notNull(),
        surname: text("surname").notNull(),
        emailAddress: text("email_address").notNull().unique(),
        emailAddressTemporary: text("email_address_temporary"),
        emailToken: text("email_token"),
        emailTokenExpiresAt: dateTimeColumn("email_token_expires_at"),
        passwordHash: text("password_hash").notNull(),
        passwordTemporary: text("password_temporary"),
        passwordTemporaryHash: text("password_temporary_hash"),
        passwordSalt: text("password_salt").notNull(),
        isActive: boolean("is_active").default(true).notNull(),
        lastCredentialsSentAt: dateTimeColumn("last_credentials_sent_at"),
        lastUpdatedAt: dateTimeColumn("last_updated_at").defaultNow().notNull(),
        createdAt: dateTimeColumn("created_at").defaultNow().notNull(),
        lastUpdatedBy: idColumn("last_updated_by"),
        createdBy: idColumn("created_by")
    }
)

// Relations
export const userRelations = relations(userModel, ({ one }) => ({
    company: one(companyModel, {
        fields: [userModel.idCompany],
        references: [companyModel.id],
    }),
    lastUpdatedByUser: one(userModel, {
        fields: [userModel.lastUpdatedBy],
        references: [userModel.id],
    }),
    createdByUser: one(userModel, {
        fields: [userModel.createdBy],
        references: [userModel.id],
    })
}))
