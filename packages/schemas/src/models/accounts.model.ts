import { relations, sql } from "drizzle-orm"
import { integer, pgEnum, pgTable, text, unique } from "drizzle-orm/pg-core"
import { types } from "../components/index.js"
import { dateTimeColumn } from "../components/models/dateTime.column.js"
import { idColumn } from "../components/models/id.column.js"
import { systems } from "../components/values/systems.js"
import { accountSheets } from "./accountSheets.model.js"
import { accountStatements } from "./accountStatements.model.js"
import { organizations } from "./organizations.model.js"
import { users } from "./users.model.js"
import { years } from "./years.model.js"


// Model
export const accountTypeEnum = pgEnum("account_type", types)
export const accountSystemEnum = pgEnum("account_system", systems)

export const accounts = pgTable(
    "accounts",
    {
        id: idColumn("id").primaryKey(),
        idOrganization: idColumn("id_organization").references(() => organizations.id, { onDelete: "restrict", onUpdate: "cascade" }).notNull(),
        idYear: idColumn("id_year").references(() => years.id, { onDelete: "cascade", onUpdate: "cascade" }).notNull(),
        idParent: idColumn("id_parent"),
        number: integer("number").notNull(),
        label: text("label").notNull(),
        type: accountTypeEnum("type").notNull(),
        system: accountSystemEnum("system").notNull(),
        lastUpdatedOn: dateTimeColumn("last_updated_on").default(sql`CURRENT_TIMESTAMP`).notNull(),
        createdOn: dateTimeColumn("created_on").default(sql`CURRENT_TIMESTAMP`).notNull(),
        lastUpdatedBy: idColumn("last_updated_by").references(() => users.id, { onDelete: "set null", onUpdate: "cascade" }),
        createdBy: idColumn("created_by").references(() => users.id, { onDelete: "set null", onUpdate: "cascade" }),
    },
    (t) => ({
        uniqueConstraint: unique().on(t.number, t.idYear, t.idOrganization)
    })
)

// Relations
export const accountRelations = relations(accounts, ({ many }) => ({
    accountSheets: many(accountSheets),
    accountStatements: many(accountStatements)
}))
