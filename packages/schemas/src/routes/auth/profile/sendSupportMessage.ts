import * as v from "valibot"
import { ticketTypes } from "../../../components/index.js"
import { textSchema } from "../../../components/schemas/text.schema.js"


// Input
export const sendSupportMessageBody = v.object({
    category: v.nullish(v.picklist(ticketTypes)),
    message: v.nonNullish(textSchema)
})


// Output
export const sendSupportMessageReturn = v.object({})
