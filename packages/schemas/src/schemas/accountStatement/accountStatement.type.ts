import { accountStatements } from "../../models/accountStatements.model"
import { accountStatementInclude } from "./accountStatement.include"


type accountStatementInclude = keyof typeof accountStatementInclude
type accountStatements = typeof accountStatements.$inferSelect

export type accountStatementReturned = Pick<accountStatements, accountStatementInclude>
