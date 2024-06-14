import { createSelectSchema } from 'drizzle-valibot'
import * as v from "valibot"
import { booleanSchema } from '../../components/schemas/boolean.schema.js'
import { dateTimeSchema } from "../../components/schemas/dateTime.schema.js"
import { idSchema } from "../../components/schemas/id.schema.js"
import { flows } from '../../components/values/flows.js'
import { accountSheets } from '../../models/accountSheets.model.js'


export const accountSheetSchema = createSelectSchema(accountSheets, {
    id: idSchema,
    idOrganization: idSchema,
    idYear: idSchema,
    idAccount: v.nonNullish(idSchema, "Un compte lié doit être renseigné"),
    idSheet: idSchema,
    flow: v.nonNullish(v.picklist(flows), "Un flux doit être renseigné"),
    isAllowance: v.nullish(booleanSchema,),
    lastUpdatedOn: dateTimeSchema,
    createdOn: dateTimeSchema,
    lastUpdatedBy: idSchema,
    createdBy: idSchema
})
