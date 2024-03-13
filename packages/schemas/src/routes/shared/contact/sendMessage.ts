import * as v from "valibot"
import { emailSchema } from "../../../components/schemas/email.schema"
import { textSchema } from "../../../components/schemas/text.schema"


// Input
export const sendMessageBody = v.object({
    email: emailSchema,
    message: textSchema
})


// Output
export const sendMessageReturn = v.object({})
