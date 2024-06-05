import { CircularLoader } from "@coulba/design/layouts"
import { auth } from "@coulba/schemas/routes"
import { useQuery } from "@tanstack/react-query"
import * as v from "valibot"
import { accountsOptions } from "../../../services/api/auth/accounts/accountsOptions"
import { computationsOptions } from "../../../services/api/auth/computations/computationsOptions"
import { rowsOptions } from "../../../services/api/auth/rows/rowsOptions"
import { statementsOptions } from "../../../services/api/auth/statements/statementsOptions"
import { Balance, getBalance } from "../../../services/reports/getBalance"
import { ErrorMessage } from "../../layouts/errorMessage"
import { StatementTable } from "./statementTable"
import { Section } from "../../layouts/section/section"



export type Statement = {
    id: string
    number: number
    label: string
    net: number
    statements: Statement[]
}

function groupStatement(statements: v.Output<typeof auth.statements.get.return>[], balance: Balance[], idParent?: string | null): Statement[] {
    return statements
        .filter((statement) => statement.idParent === idParent)
        .map((statement) => {
            const childrenStatements = groupStatement(statements, balance, statement.id)

            let net = 0

            if (childrenStatements.length === 0) {
                statement.accountStatements.forEach((accountStatement) => {
                    balance
                        .filter((_balance) => _balance.account.id === accountStatement.idAccount)
                        .forEach((_balance) => {
                            net += _balance.balance.debit + _balance.balance.credit
                        })
                })
            }
            else {
                childrenStatements.forEach((childStatement) => {
                    net += childStatement.net
                })
            }

            return ({
                id: statement.id,
                number: statement.number,
                label: statement.label,
                net: net,
                statements: childrenStatements
            })
        })
}

export function StatementReport() {
    const statements = useQuery(statementsOptions)
    const computations = useQuery(computationsOptions)
    const rows = useQuery(rowsOptions)
    const accounts = useQuery(accountsOptions)

    const balance = getBalance((rows.data ?? []).filter((row) => row.isValidated), accounts.data ?? [])

    const sortedStatements = groupStatement(statements.data ?? [], balance, null)
        .sort((a, b) => a.number - b.number)

    const sortedComputations = (computations.data ?? [])
        .sort((a, b) => a.number - b.number)


    if (rows.isLoading || accounts.isLoading) return <CircularLoader className="m-3" />
    if (rows.isError) return <ErrorMessage message={rows.error.message} />
    if (accounts.isError) return <ErrorMessage message={accounts.error.message} />
    if (!rows.data || !accounts.data) return null
    return (
        <Section.Root>
            <Section.Item className="p-0">
                <StatementTable
                    statements={sortedStatements}
                    computations={sortedComputations}
                />
            </Section.Item>
        </Section.Root>
    )
}
