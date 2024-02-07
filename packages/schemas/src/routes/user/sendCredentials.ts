import z from "zod"
import { userSchema } from "../../models/user/user.schema"


// Input
export const sendCredentialsParams = userSchema.pick({ id: true })
export type SendCredentialsParams = z.infer<typeof sendCredentialsParams>

export const sendCredentialsBody = userSchema.pick({ emailAddress: true })
export type SendCredentialsBody = z.infer<typeof sendCredentialsBody>
