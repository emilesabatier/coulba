import { createSelectSchema } from 'drizzle-valibot'
import * as v from "valibot"
import { integerSchema } from "../../components"
import { dateTimeSchema } from "../../components/schemas/dateTime.schema"
import { idSchema } from "../../components/schemas/id.schema"
import { requiredTextSchema } from '../../components/schemas/requiredText.schema'
import { sheetSides } from '../../components/values/sheetSide'
import { sheets } from "../../models"


const sheetSideSchema = v.picklist(sheetSides)

export const sheetSchema = createSelectSchema(sheets, {
    id: idSchema,
    idCompany: idSchema,
    idYear: idSchema,
    idSheetParent: idSchema,
    side: sheetSideSchema,
    number: integerSchema,
    label: requiredTextSchema,
    lastUpdatedOn: dateTimeSchema,
    createdOn: dateTimeSchema,
    lastUpdatedBy: idSchema,
    createdBy: idSchema
})
