import z from "zod"
import { yearSchema } from "../../models/year/year.schema.js"


// Input
export const updateOneYearParams = yearSchema.pick({ id: true })
export type UpdateOneYearParams = z.infer<typeof updateOneYearParams>

export const updateOneYearBody = z.object({
    label: yearSchema.shape.label,
    startingAt: yearSchema.shape.startingAt,
    endingAt: yearSchema.shape.endingAt
}).partial()
export type UpdateOneYearBody = z.infer<typeof updateOneYearBody>


// Output
export const updateOneYearReturn = yearSchema.pick({ id: true })
export type UpdateOneYearReturn = z.infer<typeof updateOneYearReturn>
