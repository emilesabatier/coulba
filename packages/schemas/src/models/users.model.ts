import { relations } from "drizzle-orm"
import { boolean, pgTable, text } from "drizzle-orm/pg-core"
import { dateTimeColumn } from "../components/models/dateTime.column.js"
import { idColumn } from "../components/models/id.column.js"
import { companies } from "./companies.model.js"


// Model
export const users = pgTable(
    "users",
    {
        id: idColumn("id").primaryKey(),
        idCompany: idColumn("id_company").references(() => companies.id, { onDelete: "restrict", onUpdate: "cascade" }).notNull(),
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
        lastInvitationSentAt: dateTimeColumn("last_credentials_sent_at"),
        lastUpdatedAt: dateTimeColumn("last_updated_at").defaultNow().notNull(),
        createdAt: dateTimeColumn("created_at").defaultNow().notNull(),
        lastUpdatedBy: idColumn("last_updated_by"),
        createdBy: idColumn("created_by")
    }
)

// Relations
export const usersRelations = relations(users, ({ one }) => ({
    company: one(companies, {
        fields: [users.idCompany],
        references: [companies.id],
    }),
    lastUpdatedByUser: one(users, {
        fields: [users.lastUpdatedBy],
        references: [users.id],
    }),
    createdByUser: one(users, {
        fields: [users.createdBy],
        references: [users.id],
    })
}))
