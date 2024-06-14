import { relations, sql } from "drizzle-orm"
import { boolean, pgEnum, pgTable, unique } from "drizzle-orm/pg-core"
import { dateTimeColumn } from "../components/models/dateTime.column.js"
import { idColumn } from "../components/models/id.column.js"
import { flows } from "../components/values/flows.js"
import { accounts } from "./accounts.model.js"
import { organizations } from "./organizations.model.js"
import { sheets } from "./sheets.model.js"
import { users } from "./users.model.js"
import { years } from "./years.model.js"


// Model
export const accountSheetFlowEnum = pgEnum("account_sheet_flow", flows)

export const accountSheets = pgTable(
    "account_sheets",
    {
        id: idColumn("id").primaryKey(),
        idOrganization: idColumn("id_organization").references(() => organizations.id, { onDelete: "restrict", onUpdate: "cascade" }).notNull(),
        idYear: idColumn("id_year").references(() => years.id, { onDelete: "cascade", onUpdate: "cascade" }).notNull(),
        idAccount: idColumn("id_account").references(() => accounts.id, { onDelete: "cascade", onUpdate: "cascade" }).notNull(),
        idSheet: idColumn("id_sheet").references(() => sheets.id, { onDelete: "cascade", onUpdate: "cascade" }).notNull(),
        flow: accountSheetFlowEnum("flow"),
        isAllowance: boolean("is_allowance").default(false),
        lastUpdatedOn: dateTimeColumn("last_updated_on").default(sql`CURRENT_TIMESTAMP`).notNull(),
        createdOn: dateTimeColumn("created_on").default(sql`CURRENT_TIMESTAMP`).notNull(),
        lastUpdatedBy: idColumn("last_updated_by").references(() => users.id, { onDelete: "set null", onUpdate: "cascade" }),
        createdBy: idColumn("created_by").references(() => users.id, { onDelete: "set null", onUpdate: "cascade" }),
    },
    (t) => ({
        uniqueConstraint: unique().on(t.idOrganization, t.idYear, t.idAccount, t.idSheet)
    })
)

// Relations
export const accountSheetRelations = relations(accountSheets, ({ one }) => ({
    account: one(accounts, {
        fields: [accountSheets.idAccount],
        references: [accounts.id],
    }),
    sheet: one(sheets, {
        fields: [accountSheets.idSheet],
        references: [sheets.id],
    })
}))
