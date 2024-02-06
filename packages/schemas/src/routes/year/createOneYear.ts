import { z } from "zod"
import { yearSchema } from "../../models/year/year.schema.js"


// Input
export const createOneYearBody = z.object({
    label: yearSchema.shape.label.optional(),
    startingAt: yearSchema.shape.startingAt,
    endingAt: yearSchema.shape.endingAt
})
export type CreateOneYearBody = z.infer<typeof createOneYearBody>


// Output
export const createOneYearReturn = yearSchema.pick({ id: true })
export type CreateOneYearReturn = z.infer<typeof createOneYearReturn>
