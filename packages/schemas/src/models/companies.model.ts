import { AnyPgColumn, pgTable, text } from "drizzle-orm/pg-core"
import { dateTimeColumn } from "../components/models/dateTime.column.js"
import { idColumn } from "../components/models/id.column.js"
import { users } from "./users.model.js"


// Model
export const companies = pgTable(
    "companies",
    {
        id: idColumn("id").primaryKey(),
        siren: text("siren").notNull().unique(),
        name: text("name").notNull(),
        apiKey: text("api_key"),
        lastUpdatedOn: dateTimeColumn("last_updated_on").defaultNow().notNull(),
        createdOn: dateTimeColumn("created_on").defaultNow().notNull(),
        lastUpdatedBy: idColumn("last_updated_by").references((): AnyPgColumn => users.id, { onDelete: "set null", onUpdate: "cascade" })
    }
)
