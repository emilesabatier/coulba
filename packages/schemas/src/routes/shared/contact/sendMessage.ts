import * as v from "valibot"
import { emailSchema } from "../../../components/schemas/email.schema.js"
import { textSchema } from "../../../components/schemas/text.schema.js"


// Input
export const sendMessageBody = v.object({
    email: emailSchema,
    message: textSchema
})


// Output
export const sendMessageReturn = v.object({})
