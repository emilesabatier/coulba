import { CircularLoader } from "@coulba/design/layouts"
import { auth } from "@coulba/schemas/routes"
import { useQuery } from "@tanstack/react-query"
import * as v from "valibot"
import { accountsOptions } from "../../../services/api/auth/accounts/accountsOptions"
import { computationsOptions } from "../../../services/api/auth/computations/computationsOptions"
import { statementsOptions } from "../../../services/api/auth/statements/statementsOptions"
import { transactionsOptions } from "../../../services/api/auth/transactions/transactionsOptions"
import { Balance, getBalance } from "../../../services/reports/getBalance"
import { ErrorMessage } from "../../layouts/errorMessage"
import { StatementTable } from "./statementTable"



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
                balance
                    .filter((_balance) => _balance.account.idStatement === statement.id)
                    .forEach((_balance) => {
                        net += _balance.balance.debit + _balance.balance.credit
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

export function StatementContent() {
    const statements = useQuery(statementsOptions)
    const computations = useQuery(computationsOptions)
    const transactions = useQuery(transactionsOptions)
    const accounts = useQuery(accountsOptions)

    const balance = getBalance(transactions.data ?? [], accounts.data ?? [])

    const sortedStatements = groupStatement(statements.data ?? [], balance, null)
        .sort((a, b) => a.number - b.number)

    const sortedComputations = (computations.data ?? [])
        .sort((a, b) => a.number - b.number)


    if (transactions.isLoading || accounts.isLoading) return <CircularLoader />
    if (transactions.isError) return <ErrorMessage message={transactions.error.message} />
    if (accounts.isError) return <ErrorMessage message={accounts.error.message} />
    if (!transactions.data || !accounts.data) return null
    return (
        <StatementTable
            statements={sortedStatements}
            computations={sortedComputations}
        />
    )
}
