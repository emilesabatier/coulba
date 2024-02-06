import { relations } from "drizzle-orm"
import { boolean, pgTable, text } from "drizzle-orm/pg-core"
import { dateTimeColumn } from "../../components/models/dateTime.column.js"
import { idColumn } from "../../components/models/id.column.js"
import { userModel } from "../user/user.model.js"


// Model
export const sessionModel = pgTable(
    "sessions",
    {
        id: idColumn("id").primaryKey(),
        idUser: idColumn("id_user").references(() => userModel.id, { onDelete: "set null", onUpdate: "cascade" }).notNull(),
        ip: text("ip"),
        token: text("token").notNull(),
        expiresAt: dateTimeColumn("expires_at").notNull(),
        isActive: boolean("is_active").default(false).notNull(),
        lastUpdatedAt: dateTimeColumn("last_updated_at").defaultNow().notNull(),
        createdAt: dateTimeColumn("created_at").defaultNow().notNull(),
    }
)

// Relations
export const sessionRelations = relations(sessionModel, ({ one }) => ({
    user: one(userModel, {
        fields: [sessionModel.idUser],
        references: [userModel.id],
    })
}))
