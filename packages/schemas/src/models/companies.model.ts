import { pgTable, text } from "drizzle-orm/pg-core"
import { dateTimeColumn } from "../components/models/dateTime.column.js"
import { idColumn } from "../components/models/id.column.js"


// Model
export const companies = pgTable(
    "companies",
    {
        id: idColumn("id").primaryKey(),
        siren: text("siren").notNull().unique(),
        name: text("name").notNull(),
        lastUpdatedOn: dateTimeColumn("last_updated_on").defaultNow().notNull(),
        createdOn: dateTimeColumn("created_on").defaultNow().notNull(),
        lastUpdatedBy: idColumn("last_updated_by")
    }
)
