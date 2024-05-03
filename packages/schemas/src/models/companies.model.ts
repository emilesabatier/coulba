import { sql } from "drizzle-orm"
import { AnyPgColumn, pgTable, text } from "drizzle-orm/pg-core"
import { dateTimeColumn } from "../components/models/dateTime.column.js"
import { idColumn } from "../components/models/id.column.js"
import { users } from "./users.model.js"


// Model
export const companies = pgTable(
    "companies",
    {
        id: idColumn("id").primaryKey(),
        siren: text("siren").unique(),
        name: text("name"),
        address: text("address"),
        email: text("email").notNull(),
        apiKeyHash: text("api_key_hash").unique(),
        lastUpdatedOn: dateTimeColumn("last_updated_on").default(sql`CURRENT_TIMESTAMP`).notNull(),
        createdOn: dateTimeColumn("created_on").default(sql`CURRENT_TIMESTAMP`).notNull(),
        lastUpdatedBy: idColumn("last_updated_by").references((): AnyPgColumn => users.id, { onDelete: "set null", onUpdate: "cascade" })
    }
)
