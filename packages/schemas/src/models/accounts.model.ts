import { sql } from "drizzle-orm"
import { integer, pgTable, text, unique } from "drizzle-orm/pg-core"
import { dateTimeColumn } from "../components/models/dateTime.column.js"
import { idColumn } from "../components/models/id.column.js"
import { companies } from "./companies.model.js"
import { sheets } from "./sheets.model.js"
import { statements } from "./statements.model.js"
import { users } from "./users.model.js"
import { years } from "./years.model.js"


// Model
export const accounts = pgTable(
    "accounts",
    {
        id: idColumn("id").primaryKey(),
        idCompany: idColumn("id_company").references(() => companies.id, { onDelete: "restrict", onUpdate: "cascade" }).notNull(),
        idYear: idColumn("id_year").references(() => years.id, { onDelete: "restrict", onUpdate: "cascade" }).notNull(),
        idSheet: idColumn("id_sheet").references(() => sheets.id, { onDelete: "restrict", onUpdate: "cascade" }),
        idStatement: idColumn("id_statement").references(() => statements.id, { onDelete: "restrict", onUpdate: "cascade" }),
        idAccountParent: idColumn("id_account_parent"),
        number: integer("number").notNull(),
        label: text("label").notNull(),
        lastUpdatedOn: dateTimeColumn("last_updated_on").default(sql`CURRENT_TIMESTAMP`).notNull(),
        createdOn: dateTimeColumn("created_on").default(sql`CURRENT_TIMESTAMP`).notNull(),
        lastUpdatedBy: idColumn("last_updated_by").references(() => users.id, { onDelete: "set null", onUpdate: "cascade" }),
        createdBy: idColumn("created_by").references(() => users.id, { onDelete: "set null", onUpdate: "cascade" }),
    },
    (t) => ({
        uniqueConstraint: unique().on(t.number, t.idYear, t.idCompany)
    })
)
