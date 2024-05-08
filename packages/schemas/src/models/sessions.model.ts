import { relations, sql } from "drizzle-orm"
import { boolean, pgTable } from "drizzle-orm/pg-core"
import { dateTimeColumn } from "../components/models/dateTime.column.js"
import { idColumn } from "../components/models/id.column.js"
import { users } from "./users.model.js"


// Model
export const sessions = pgTable(
    "sessions",
    {
        id: idColumn("id").primaryKey(),
        idUser: idColumn("id_user").references(() => users.id, { onDelete: "set null", onUpdate: "cascade" }).notNull(),
        expiresOn: dateTimeColumn("expires_on").notNull(),
        isActive: boolean("is_active").default(false).notNull(),
        lastUpdatedOn: dateTimeColumn("last_updated_on").default(sql`CURRENT_TIMESTAMP`).notNull(),
        createdOn: dateTimeColumn("created_on").default(sql`CURRENT_TIMESTAMP`).notNull(),
    }
)

// Relations
export const sessionsRelations = relations(sessions, ({ one }) => ({
    user: one(users, {
        fields: [sessions.idUser],
        references: [users.id],
    })
}))
