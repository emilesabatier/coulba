import { CircularLoader } from "@coulba/design/layouts"
import { auth } from "@coulba/schemas/routes"
import { useQuery } from "@tanstack/react-query"
import * as v from "valibot"
import { accountsOptions } from "../../../services/api/auth/accounts/accountsOptions"
import { recordsOptions } from "../../../services/api/auth/records/recordsOptions"
import { statementsOptions } from "../../../services/api/auth/statements/statementsOptions"
import { Balance, getBalance } from "../../../services/reports/getBalance"
import { ErrorMessage } from "../../layouts/errorMessage"
import { StatementTable } from "./statementTable"



export type Statement = {
    key: string
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
                key: statement.id,
                number: statement.number,
                label: statement.label,
                net: net,
                statements: childrenStatements
            })
        })
}

export function StatementContent() {
    const statements = useQuery(statementsOptions)
    const records = useQuery(recordsOptions)
    const accounts = useQuery(accountsOptions)

    const balance = getBalance(records.data ?? [], accounts.data ?? [])

    const statementData = groupStatement(statements.data ?? [], balance, null)
        .sort((a, b) => a.number - b.number)


    if (records.isLoading || accounts.isLoading) return <CircularLoader />
    if (records.isError) return <ErrorMessage message={records.error.message} />
    if (accounts.isError) return <ErrorMessage message={accounts.error.message} />
    if (!records.data || !accounts.data) return null
    return (
        <div className="w-full h-full flex flex-col justify-start items-stretch gap-4">
            <StatementTable statement={statementData} />
        </div>
    )
}
