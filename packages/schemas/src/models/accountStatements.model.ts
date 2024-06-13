import { relations, sql } from "drizzle-orm"
import { pgTable, unique } from "drizzle-orm/pg-core"
import { dateTimeColumn } from "../components/models/dateTime.column.js"
import { idColumn } from "../components/models/id.column.js"
import { accounts } from "./accounts.model.js"
import { organizations } from "./organizations.model.js"
import { statements } from "./statements.model.js"
import { users } from "./users.model.js"
import { years } from "./years.model.js"


// Model
export const accountStatements = pgTable(
    "account_statements",
    {
        id: idColumn("id").primaryKey(),
        idOrganization: idColumn("id_organization").references(() => organizations.id, { onDelete: "restrict", onUpdate: "cascade" }).notNull(),
        idYear: idColumn("id_year").references(() => years.id, { onDelete: "cascade", onUpdate: "cascade" }).notNull(),
        idAccount: idColumn("id_account").references(() => accounts.id, { onDelete: "cascade", onUpdate: "cascade" }).notNull(),
        idStatement: idColumn("id_statement").references(() => statements.id, { onDelete: "cascade", onUpdate: "cascade" }).notNull(),
        lastUpdatedOn: dateTimeColumn("last_updated_on").default(sql`CURRENT_TIMESTAMP`).notNull(),
        createdOn: dateTimeColumn("created_on").default(sql`CURRENT_TIMESTAMP`).notNull(),
        lastUpdatedBy: idColumn("last_updated_by").references(() => users.id, { onDelete: "set null", onUpdate: "cascade" }),
        createdBy: idColumn("created_by").references(() => users.id, { onDelete: "set null", onUpdate: "cascade" }),
    },
    (t) => ({
        uniqueConstraint: unique().on(t.idOrganization, t.idYear, t.idAccount, t.idStatement)
    })
)

// Relations
export const accountStatementRelations = relations(accountStatements, ({ one }) => ({
    account: one(accounts, {
        fields: [accountStatements.idAccount],
        references: [accounts.id],
    }),
    statement: one(statements, {
        fields: [accountStatements.idStatement],
        references: [statements.id],
    })
}))
