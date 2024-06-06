import { sql } from "drizzle-orm"
import { AnyPgColumn, pgEnum, pgTable, text } from "drizzle-orm/pg-core"
import { types } from "../components/index.js"
import { dateTimeColumn } from "../components/models/dateTime.column.js"
import { idColumn } from "../components/models/id.column.js"
import { users } from "./users.model.js"


// Model
export const organizationTypeEnum = pgEnum("organization_type", types)

export const organizations = pgTable(
    "organizations",
    {
        id: idColumn("id").primaryKey(),
        type: organizationTypeEnum("type").notNull(),
        siren: text("siren"),
        name: text("name"),
        email: text("email"),
        apiKeyHash: text("api_key_hash").unique(),
        lastUpdatedOn: dateTimeColumn("last_updated_on").default(sql`CURRENT_TIMESTAMP`).notNull(),
        createdOn: dateTimeColumn("created_on").default(sql`CURRENT_TIMESTAMP`).notNull(),
        lastUpdatedBy: idColumn("last_updated_by").references((): AnyPgColumn => users.id, { onDelete: "set null", onUpdate: "cascade" })
    }
)
