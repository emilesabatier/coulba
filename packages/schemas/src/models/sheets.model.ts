import { relations, sql } from "drizzle-orm"
import { integer, pgEnum, pgTable, text, unique } from "drizzle-orm/pg-core"
import { dateTimeColumn } from "../components/models/dateTime.column.js"
import { idColumn } from "../components/models/id.column.js"
import { sheetSides } from "../components/values/sheetSide.js"
import { accountSheets } from "./accountSheets.model.js"
import { companies } from "./companies.model.js"
import { users } from "./users.model.js"
import { years } from "./years.model.js"


// Model
export const sheetSide = pgEnum("sheet_side", sheetSides)

export const sheets = pgTable(
    "sheets",
    {
        id: idColumn("id").primaryKey(),
        idCompany: idColumn("id_company").references(() => companies.id, { onDelete: "restrict", onUpdate: "cascade" }).notNull(),
        idYear: idColumn("id_year").references(() => years.id, { onDelete: "restrict", onUpdate: "cascade" }).notNull(),
        idParent: idColumn("id_parent"),
        side: sheetSide("side").notNull(),
        number: integer("number").notNull(),
        label: text("label").notNull(),
        lastUpdatedOn: dateTimeColumn("last_updated_on").default(sql`CURRENT_TIMESTAMP`).notNull(),
        createdOn: dateTimeColumn("created_on").default(sql`CURRENT_TIMESTAMP`).notNull(),
        lastUpdatedBy: idColumn("last_updated_by").references(() => users.id, { onDelete: "set null", onUpdate: "cascade" }),
        createdBy: idColumn("created_by").references(() => users.id, { onDelete: "set null", onUpdate: "cascade" }),
    },
    (t) => ({
        uniqueConstraint: unique().on(t.idCompany, t.idYear, t.side, t.number)
    })
)

// Relations
export const sheetRelations = relations(sheets, ({ many }) => ({
    accountSheets: many(accountSheets)
}))
