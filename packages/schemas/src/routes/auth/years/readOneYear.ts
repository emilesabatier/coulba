import * as v from "valibot"
import { userKeys } from "../../../schemas/user/user.include"
import { userSchema } from "../../../schemas/user/user.schema"
import { yearSchema } from "../../../schemas/year/year.schema"


// Input
export const readOneYearParams = v.object({
    idYear: yearSchema.entries.id
})

// Output
export const readOneYearReturn = v.merge([
    yearSchema,
    v.object({
        lastUpdatedByUser: v.nullable(v.pick(userSchema, userKeys)),
        createdByUser: v.nullable(v.pick(userSchema, userKeys)),
    })
])
