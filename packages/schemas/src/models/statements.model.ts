import { relations, sql } from "drizzle-orm"
import { boolean, integer, numeric, pgTable, text, unique } from "drizzle-orm/pg-core"
import { dateTimeColumn } from "../components/models/dateTime.column.js"
import { idColumn } from "../components/models/id.column.js"
import { accountStatements } from "./accountStatements.model.js"
import { computationStatements } from "./computationStatements.model.js"
import { organizations } from "./organizations.model.js"
import { users } from "./users.model.js"
import { years } from "./years.model.js"


// Model
export const statements = pgTable(
    "statements",
    {
        id: idColumn("id").primaryKey(),
        idOrganization: idColumn("id_organization").references(() => organizations.id, { onDelete: "restrict", onUpdate: "cascade" }).notNull(),
        idYear: idColumn("id_year").references(() => years.id, { onDelete: "cascade", onUpdate: "cascade" }).notNull(),
        idParent: idColumn("id_parent"),
        isDefault: boolean("is_default").notNull(),
        number: integer("number").notNull(),
        label: text("label").notNull(),
        addedNetAmount: numeric("added_net_amount", { scale: 2 }).notNull(),
        lastUpdatedOn: dateTimeColumn("last_updated_on").default(sql`CURRENT_TIMESTAMP`).notNull(),
        createdOn: dateTimeColumn("created_on").default(sql`CURRENT_TIMESTAMP`).notNull(),
        lastUpdatedBy: idColumn("last_updated_by").references(() => users.id, { onDelete: "set null", onUpdate: "cascade" }),
        createdBy: idColumn("created_by").references(() => users.id, { onDelete: "set null", onUpdate: "cascade" }),
    },
    (t) => ({
        uniqueConstraint: unique().on(t.idOrganization, t.idYear, t.idParent, t.number)
    })
)

// Relations
export const statementRelations = relations(statements, ({ many }) => ({
    accountStatements: many(accountStatements),
    computationStatements: many(computationStatements)
}))
