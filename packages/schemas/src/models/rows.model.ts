import { relations, sql } from "drizzle-orm"
import { boolean, numeric, pgTable, text } from "drizzle-orm/pg-core"
import { dateTimeColumn } from "../components/models/dateTime.column.js"
import { idColumn } from "../components/models/id.column.js"
import { accounts } from "./accounts.model.js"
import { organizations } from "./organizations.model.js"
import { records } from "./records.model.js"
import { users } from "./users.model.js"
import { years } from "./years.model.js"


// Model
export const rows = pgTable(
    "rows",
    {
        id: idColumn("id").primaryKey(),
        idOrganization: idColumn("id_organization").references(() => organizations.id, { onDelete: "restrict", onUpdate: "cascade" }).notNull(),
        idYear: idColumn("id_year").references(() => years.id, { onDelete: "cascade", onUpdate: "cascade" }).notNull(),
        idRecord: idColumn("id_record").references(() => records.id, { onDelete: "cascade", onUpdate: "cascade" }).notNull(),
        idAccount: idColumn("id_account").references(() => accounts.id, { onDelete: "restrict", onUpdate: "cascade" }).notNull(),
        isValidated: boolean("is_validated").notNull(),
        isComputed: boolean("is_computed").notNull(),
        label: text("label").notNull(),
        debit: numeric("debit", { scale: 2 }).notNull(),
        credit: numeric("credit", { scale: 2 }).notNull(),
        lastUpdatedOn: dateTimeColumn("last_updated_on").default(sql`CURRENT_TIMESTAMP`).notNull(),
        createdOn: dateTimeColumn("created_on").default(sql`CURRENT_TIMESTAMP`).notNull(),
        lastUpdatedBy: idColumn("last_updated_by").references(() => users.id, { onDelete: "set null", onUpdate: "cascade" }),
        createdBy: idColumn("created_by").references(() => users.id, { onDelete: "set null", onUpdate: "cascade" }),
    }
)

// Relations
export const rowRelations = relations(rows, ({ one }) => ({
    record: one(records, {
        fields: [rows.idRecord],
        references: [records.id],
    })
}))