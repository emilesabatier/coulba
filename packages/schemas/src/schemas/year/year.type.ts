import { years } from "../../models"
import { yearInclude } from "./year.include"


type yearInclude = keyof typeof yearInclude
type years = typeof years.$inferSelect

export type YearReturned = Pick<years, yearInclude>
