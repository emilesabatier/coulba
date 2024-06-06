import { relations, sql } from "drizzle-orm"
import { boolean, pgTable, text } from "drizzle-orm/pg-core"
import { dateTimeColumn } from "../components/models/dateTime.column.js"
import { idColumn } from "../components/models/id.column.js"
import { attachments } from "./attachments.model.js"
import { journals } from "./journals.model.js"
import { organizations } from "./organizations.model.js"
import { rows } from "./rows.model.js"
import { users } from "./users.model.js"
import { years } from "./years.model.js"


// Model
export const records = pgTable(
    "records",
    {
        id: idColumn("id").primaryKey(),
        idOrganization: idColumn("id_organization").references(() => organizations.id, { onDelete: "restrict", onUpdate: "cascade" }).notNull(),
        idYear: idColumn("id_year").references(() => years.id, { onDelete: "cascade", onUpdate: "cascade" }).notNull(),
        idJournal: idColumn("id_journal").references(() => journals.id, { onDelete: "set null", onUpdate: "cascade" }),
        idAttachment: idColumn("id_attachment").references(() => attachments.id, { onDelete: "set null", onUpdate: "cascade" }),
        isValidated: boolean("is_validated").notNull(),
        validatedOn: dateTimeColumn("validated_on"),
        label: text("label").notNull(),
        date: dateTimeColumn("date").notNull(),
        lastUpdatedOn: dateTimeColumn("last_updated_on").default(sql`CURRENT_TIMESTAMP`).notNull(),
        createdOn: dateTimeColumn("created_on").default(sql`CURRENT_TIMESTAMP`).notNull(),
        lastUpdatedBy: idColumn("last_updated_by").references(() => users.id, { onDelete: "set null", onUpdate: "cascade" }),
        createdBy: idColumn("created_by").references(() => users.id, { onDelete: "set null", onUpdate: "cascade" }),
    }
)

// Relations
export const recordRelations = relations(records, ({ many }) => ({
    rows: many(rows)
}))
