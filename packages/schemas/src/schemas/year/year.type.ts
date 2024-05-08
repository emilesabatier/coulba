import { years } from "../../models/index.js"
import { yearInclude } from "./year.include.js"


type yearInclude = keyof typeof yearInclude
type years = typeof years.$inferSelect

export type YearReturned = Pick<years, yearInclude>
