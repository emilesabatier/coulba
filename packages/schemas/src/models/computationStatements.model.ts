import { relations, sql } from "drizzle-orm"
import { pgEnum, pgTable, unique } from "drizzle-orm/pg-core"
import { dateTimeColumn } from "../components/models/dateTime.column.js"
import { idColumn } from "../components/models/id.column.js"
import { operations } from "../components/values/operations.js"
import { computations } from "./computations.model.js"
import { organizations } from "./organizations.model.js"
import { statements } from "./statements.model.js"
import { users } from "./users.model.js"
import { years } from "./years.model.js"


// Model
export const computationStatementOperationEnum = pgEnum("computation_statement_operation", operations)

export const computationStatements = pgTable(
    "computation_statements",
    {
        id: idColumn("id").primaryKey(),
        idOrganization: idColumn("id_organization").references(() => organizations.id, { onDelete: "cascade", onUpdate: "cascade" }).notNull(),
        idYear: idColumn("id_year").references(() => years.id, { onDelete: "cascade", onUpdate: "cascade" }).notNull(),
        idComputation: idColumn("id_computation").references(() => computations.id, { onDelete: "cascade", onUpdate: "cascade" }).notNull(),
        idStatement: idColumn("id_statement").references(() => statements.id, { onDelete: "cascade", onUpdate: "cascade" }).notNull(),
        operation: computationStatementOperationEnum("operation").notNull(),
        lastUpdatedOn: dateTimeColumn("last_updated_on").default(sql`CURRENT_TIMESTAMP`).notNull(),
        createdOn: dateTimeColumn("created_on").default(sql`CURRENT_TIMESTAMP`).notNull(),
        lastUpdatedBy: idColumn("last_updated_by").references(() => users.id, { onDelete: "set null", onUpdate: "cascade" }),
        createdBy: idColumn("created_by").references(() => users.id, { onDelete: "set null", onUpdate: "cascade" }),
    },
    (t) => ({
        uniqueConstraint: unique().on(t.idOrganization, t.idYear, t.idComputation, t.idStatement)
    })
)


// Relations
export const computationStatementRelations = relations(computationStatements, ({ one }) => ({
    computation: one(computations, {
        fields: [computationStatements.idComputation],
        references: [computations.id],
    }),
    statement: one(statements, {
        fields: [computationStatements.idStatement],
        references: [statements.id],
    })
}))
