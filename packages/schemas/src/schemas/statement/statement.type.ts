import { statements } from "../../models"
import { statementInclude } from "./statement.include"


type statementInclude = keyof typeof statementInclude
type statements = typeof statements.$inferSelect

export type StatementReturned = Pick<statements, statementInclude>
