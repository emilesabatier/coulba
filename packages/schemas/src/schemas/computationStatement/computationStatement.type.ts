import { computationStatements } from "../../models/computationStatements.model.js"
import { computationStatementInclude } from "./computationStatement.include.js"


type computationStatementInclude = keyof typeof computationStatementInclude
type computationStatements = typeof computationStatements.$inferSelect

export type computationStatementReturned = Pick<computationStatements, computationStatementInclude>
