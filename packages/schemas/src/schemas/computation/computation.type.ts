import { computations } from "../../models/computations.model.js"
import { computationInclude } from "./computation.include.js"


type computationInclude = keyof typeof computationInclude
type computations = typeof computations.$inferSelect

export type computationReturned = Pick<computations, computationInclude>
