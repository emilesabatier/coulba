import { computationStatements } from "../../models/computationStatements.model"
import { computationStatementInclude } from "./computationStatement.include"


type computationStatementInclude = keyof typeof computationStatementInclude
type computationStatements = typeof computationStatements.$inferSelect

export type computationStatementReturned = Pick<computationStatements, computationStatementInclude>
