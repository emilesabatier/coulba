import { sql } from "drizzle-orm"
import { AnyPgColumn, boolean, pgEnum, pgTable, text } from "drizzle-orm/pg-core"
import { dateTimeColumn } from "../components/models/dateTime.column.js"
import { idColumn } from "../components/models/id.column.js"
import { organizations } from "./organizations.model.js"
import { users } from "./users.model.js"
import { systems } from "../components/index.js"


// Model
export const yearSystemEnum = pgEnum("year_system", systems)

export const years = pgTable(
    "years",
    {
        id: idColumn("id").primaryKey(),
        idOrganization: idColumn("id_organization").references(() => organizations.id, { onDelete: "restrict", onUpdate: "cascade" }).notNull(),
        idPreviousYear: idColumn("id_previous_year").references((): AnyPgColumn => years.id, { onDelete: "set null", onUpdate: "cascade" }),
        isClosed: boolean("is_closed").default(false).notNull(),
        isSelected: boolean("is_selected").notNull(),
        label: text("label").notNull(),
        startingOn: dateTimeColumn("starting_on").notNull(),
        endingOn: dateTimeColumn("ending_on").notNull(),
        system: yearSystemEnum("system").default("base").notNull(),
        lastUpdatedOn: dateTimeColumn("last_updated_on").default(sql`CURRENT_TIMESTAMP`).notNull(),
        createdOn: dateTimeColumn("created_on").default(sql`CURRENT_TIMESTAMP`).notNull(),
        lastUpdatedBy: idColumn("last_updated_by").references(() => users.id, { onDelete: "set null", onUpdate: "cascade" }),
        createdBy: idColumn("created_by").references(() => users.id, { onDelete: "set null", onUpdate: "cascade" }),
    }
)
