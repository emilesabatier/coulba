import { CircularLoader } from "@coulba/design/layouts"
import { useQuery } from "@tanstack/react-query"
import { accountsOptions } from "../../../services/api/auth/accounts/accountsOptions"
import { computationsOptions } from "../../../services/api/auth/computations/computationsOptions"
import { statementsOptions } from "../../../services/api/auth/statements/statementsOptions"
import { getBalance } from "../../../services/reports/getBalance"
import { ErrorMessage } from "../../layouts/errorMessage"
import { Section } from "../../layouts/section/section"
import { groupStatements } from "./groupStatements"
import { StatementTable } from "./statementTable"


export function StatementReport() {
    const statements = useQuery(statementsOptions)
    const computations = useQuery(computationsOptions)
    const accounts = useQuery(accountsOptions)

    const balance = getBalance(accounts.data ?? [])

    const sortedStatements = groupStatements(statements.data ?? [], balance, null)
        .sort((a, b) => a.number - b.number)

    const sortedComputations = (computations.data ?? [])
        .sort((a, b) => a.number - b.number)


    if (accounts.isLoading) return <CircularLoader className="m-3" />
    if (accounts.isError) return <ErrorMessage message={accounts.error.message} />
    if (!accounts.data) return null
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
