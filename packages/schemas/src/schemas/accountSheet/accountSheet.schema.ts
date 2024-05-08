import { createSelectSchema } from 'drizzle-valibot'
import * as v from "valibot"
import { booleanSchema } from '../../components/schemas/boolean.schema.js'
import { dateTimeSchema } from "../../components/schemas/dateTime.schema.js"
import { idSchema } from "../../components/schemas/id.schema.js"
import { flows } from '../../components/values/flows.js'
import { accountSheets } from '../../models/accountSheets.model.js'


const accountSheetFlowSchema = v.picklist(flows)

export const accountSheetSchema = createSelectSchema(accountSheets, {
    id: idSchema,
    idAccount: idSchema,
    idSheet: idSchema,
    flow: accountSheetFlowSchema,
    isAllowance: booleanSchema,
    lastUpdatedOn: dateTimeSchema,
    createdOn: dateTimeSchema,
    lastUpdatedBy: idSchema,
    createdBy: idSchema
})
