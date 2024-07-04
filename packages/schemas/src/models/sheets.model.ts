import { relations, sql } from "drizzle-orm"
import { boolean, integer, numeric, pgEnum, pgTable, text, unique } from "drizzle-orm/pg-core"
import { dateTimeColumn } from "../components/models/dateTime.column.js"
import { idColumn } from "../components/models/id.column.js"
import { sides } from "../components/values/sides.js"
import { accountSheets } from "./accountSheets.model.js"
import { organizations } from "./organizations.model.js"
import { users } from "./users.model.js"
import { years } from "./years.model.js"


// Model
export const sheetSideEnum = pgEnum("sheet_side", sides)

export const sheets = pgTable(
    "sheets",
    {
        id: idColumn("id").primaryKey(),
        idOrganization: idColumn("id_organization").references(() => organizations.id, { onDelete: "cascade", onUpdate: "cascade" }).notNull(),
        idYear: idColumn("id_year").references(() => years.id, { onDelete: "cascade", onUpdate: "cascade" }).notNull(),
        idParent: idColumn("id_parent"),
        isDefault: boolean("is_default").notNull(),
        side: sheetSideEnum("side").notNull(),
        number: integer("number").notNull(),
        label: text("label").notNull(),
        addedGrossAmount: numeric("added_gross_amount", { scale: 2 }).notNull(),
        addedAllowanceAmount: numeric("added_allowance_amount", { scale: 2 }).notNull(),
        lastUpdatedOn: dateTimeColumn("last_updated_on").default(sql`CURRENT_TIMESTAMP`).notNull(),
        createdOn: dateTimeColumn("created_on").default(sql`CURRENT_TIMESTAMP`).notNull(),
        lastUpdatedBy: idColumn("last_updated_by").references(() => users.id, { onDelete: "set null", onUpdate: "cascade" }),
        createdBy: idColumn("created_by").references(() => users.id, { onDelete: "set null", onUpdate: "cascade" }),
    },
    (t) => ({
        uniqueConstraint: unique().on(t.idOrganization, t.idYear, t.side, t.number)
    })
)

// Relations
export const sheetRelations = relations(sheets, ({ many }) => ({
    accountSheets: many(accountSheets)
}))
