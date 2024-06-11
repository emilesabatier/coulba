import { createSelectSchema } from 'drizzle-valibot'
import * as v from "valibot"
import { accountTypes, integerSchema, organizationScopes } from "../../components/index.js"
import { booleanSchema } from '../../components/schemas/boolean.schema.js'
import { dateTimeSchema } from "../../components/schemas/dateTime.schema.js"
import { idSchema } from "../../components/schemas/id.schema.js"
import { numericSchema } from '../../components/schemas/numeric.schema.js'
import { requiredTextSchema } from '../../components/schemas/requiredText.schema.js'
import { accounts } from "../../models/index.js"


export const accountSchema = createSelectSchema(accounts, {
    id: idSchema,
    idOrganization: idSchema,
    idYear: idSchema,
    idParent: idSchema,
    isMandatory: booleanSchema,
    isClass: booleanSchema,
    isSelectable: booleanSchema,
    number: integerSchema,
    label: requiredTextSchema,
    debit: numericSchema,
    credit: numericSchema,
    type: v.picklist(accountTypes),
    scope: v.picklist(organizationScopes),
    lastUpdatedOn: dateTimeSchema,
    createdOn: dateTimeSchema,
    lastUpdatedBy: idSchema,
    createdBy: idSchema
})
