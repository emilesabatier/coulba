import { createSelectSchema } from 'drizzle-valibot'
import * as v from "valibot"
import { integerSchema } from "../../components/index.js"
import { booleanSchema } from '../../components/schemas/boolean.schema.js'
import { dateTimeSchema } from "../../components/schemas/dateTime.schema.js"
import { idSchema } from "../../components/schemas/id.schema.js"
import { requiredTextSchema } from '../../components/schemas/requiredText.schema.js'
import { sheetFlows } from '../../components/values/sheetFlows.js'
import { accounts } from "../../models/index.js"


const sheetFlowSchema = v.picklist(sheetFlows)

export const accountSchema = createSelectSchema(accounts, {
    id: idSchema,
    idCompany: idSchema,
    idYear: idSchema,
    idSheet: idSchema,
    flow: sheetFlowSchema,
    isAllowance: booleanSchema,
    idStatement: idSchema,
    idAccountParent: idSchema,
    label: requiredTextSchema,
    number: integerSchema,
    lastUpdatedOn: dateTimeSchema,
    createdOn: dateTimeSchema,
    lastUpdatedBy: idSchema,
    createdBy: idSchema
})
