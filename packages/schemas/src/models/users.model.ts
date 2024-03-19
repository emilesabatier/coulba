import { AnyPgColumn, boolean, pgTable, text } from "drizzle-orm/pg-core"
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
        email: text("email").notNull().unique(),
        emailTemporary: text("email_temporary"),
        emailToken: text("email_token"),
        emailTokenExpiresAt: dateTimeColumn("email_token_expires_on"),
        passwordHash: text("password_hash").notNull(),
        passwordSalt: text("password_salt").notNull(),
        isActive: boolean("is_active").default(true).notNull(),
        invitationToken: text("invitation_token"),
        invitationLastSentOn: dateTimeColumn("invitation_last_sent_on"),
        lastUpdatedOn: dateTimeColumn("last_updated_on").defaultNow().notNull(),
        createdOn: dateTimeColumn("created_on").defaultNow().notNull(),
        lastUpdatedBy: idColumn("last_updated_by").references((): AnyPgColumn => users.id, { onDelete: "set null", onUpdate: "cascade" }),
        createdBy: idColumn("created_by").references((): AnyPgColumn => users.id, { onDelete: "set null", onUpdate: "cascade" }),
    }
)
