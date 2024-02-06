import { yearInclude } from "./year.include.js"
import { yearModel } from "./year.model.js"


type yearInclude = keyof typeof yearInclude
type yearModel = typeof yearModel.$inferSelect

export type YearReturned = Pick<yearModel, yearInclude>
