import { createSelectSchema } from 'drizzle-valibot'
import * as v from "valibot"
import { accountTypes, integerSchema, organizationScopes } from "../../components/index.js"
import { booleanSchema } from '../../components/schemas/boolean.schema.js'
import { dateTimeSchema } from "../../components/schemas/dateTime.schema.js"
import { idSchema } from "../../components/schemas/id.schema.js"
import { requiredTextSchema } from '../../components/schemas/requiredText.schema.js'
import { accounts } from "../../models/index.js"


export const accountSchema = createSelectSchema(accounts, {
    id: idSchema,
    idOrganization: idSchema,
    idYear: idSchema,
    idParent: v.nonNullish(idSchema, "Un compte parent doit être renseigné"),
    isMandatory: booleanSchema,
    isClass: v.nullish(booleanSchema),
    isSelectable: v.nullish(booleanSchema),
    isDefault: booleanSchema,
    number: v.nonNullish(integerSchema, "Un numéro doit être renseigné"),
    label: v.nonNullish(requiredTextSchema, "Un libellé doit être renseigné"),
    type: v.nonNullish(v.picklist(accountTypes), "Un type doit être renseigné"),
    scope: v.picklist(organizationScopes),
    lastUpdatedOn: dateTimeSchema,
    createdOn: dateTimeSchema,
    lastUpdatedBy: idSchema,
    createdBy: idSchema
})
