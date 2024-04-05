import { statements } from "../../models/index.js"
import { statementInclude } from "./statement.include.js"


type statementInclude = keyof typeof statementInclude
type statements = typeof statements.$inferSelect

export type StatementReturned = Pick<statements, statementInclude>
