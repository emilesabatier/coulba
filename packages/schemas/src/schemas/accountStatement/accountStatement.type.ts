import { accountStatements } from "../../models/accountStatements.model.js"
import { accountStatementInclude } from "./accountStatement.include.js"


type accountStatementInclude = keyof typeof accountStatementInclude
type accountStatements = typeof accountStatements.$inferSelect

export type accountStatementReturned = Pick<accountStatements, accountStatementInclude>
