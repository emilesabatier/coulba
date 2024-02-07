import { yearInclude } from "./year.include"
import { yearModel } from "./year.model"


type yearInclude = keyof typeof yearInclude
type yearModel = typeof yearModel.$inferSelect

export type YearReturned = Pick<yearModel, yearInclude>
