import z from "zod"
import { yearSchema } from "../../models/year/year.schema"


// Input
export const deleteOneYearParams = yearSchema.pick({ id: true })
export type DeleteOneYearParams = z.infer<typeof deleteOneYearParams>


// Output
export const deleteOneYearReturn = yearSchema.pick({ id: true })
export type DeleteOneYearReturn = z.infer<typeof deleteOneYearReturn>
