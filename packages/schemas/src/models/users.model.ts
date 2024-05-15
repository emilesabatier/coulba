import { sql } from "drizzle-orm"
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
        alias: text("alias"),
        email: text("email").notNull().unique(),
        isEmailValidated: boolean("is_email_validated").notNull(),
        emailToValidate: text("email_to_validate"),
        emailToken: text("email_token"),
        emailTokenExpiresOn: dateTimeColumn("email_token_expires_on"),
        passwordHash: text("password_hash"),
        passwordSalt: text("password_salt").notNull(),
        isActive: boolean("is_active").notNull(),
        invitationToken: text("invitation_token"),
        isInvitationValidated: boolean("is_invitation_validated").default(false).notNull(),
        invitationTokenExpiresOn: dateTimeColumn("invitation_token_expires_on"),
        invitationLastSentOn: dateTimeColumn("invitation_last_sent_on"),
        lastUpdatedOn: dateTimeColumn("last_updated_on").default(sql`CURRENT_TIMESTAMP`).notNull(),
        createdOn: dateTimeColumn("created_on").default(sql`CURRENT_TIMESTAMP`).notNull(),
        lastUpdatedBy: idColumn("last_updated_by").references((): AnyPgColumn => users.id, { onDelete: "set null", onUpdate: "cascade" }),
        createdBy: idColumn("created_by").references((): AnyPgColumn => users.id, { onDelete: "set null", onUpdate: "cascade" }),
    }
)
