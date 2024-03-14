import { relations } from "drizzle-orm"
import { integer, pgTable, text } from "drizzle-orm/pg-core"
import { dateTimeColumn } from "../components/models/dateTime.column.js"
import { idColumn } from "../components/models/id.column.js"
import { companies } from "./companies.model.js"
import { users } from "./users.model.js"
import { years } from "./years.model.js"


// Model
export const accounts = pgTable(
    "accounts",
    {
        id: idColumn("id").primaryKey(),
        idCompany: idColumn("id_company").references(() => companies.id, { onDelete: "restrict", onUpdate: "cascade" }).notNull(),
        idYear: idColumn("id_year").references(() => years.id, { onDelete: "restrict", onUpdate: "cascade" }).notNull(),
        idAccountParent: idColumn("id_account_parent"),
        number: integer("number").notNull().unique(),
        label: text("label").notNull(),
        lastUpdatedOn: dateTimeColumn("last_updated_on").defaultNow().notNull(),
        createdOn: dateTimeColumn("created_on").defaultNow().notNull(),
        lastUpdatedBy: idColumn("last_updated_by").references(() => users.id, { onDelete: "set null", onUpdate: "cascade" }),
        createdBy: idColumn("created_by").references(() => users.id, { onDelete: "set null", onUpdate: "cascade" }),
    }
)


// Relations
export const accountsRelations = relations(accounts, ({ one }) => ({
    year: one(years, {
        fields: [accounts.idYear],
        references: [years.id],
    }),
    accountParent: one(accounts, {
        fields: [accounts.idAccountParent],
        references: [accounts.id],
    })
}))
