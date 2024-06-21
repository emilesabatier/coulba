import { CircularLoader } from "@coulba/design/layouts"
import { useQuery } from "@tanstack/react-query"
import { accountsOptions } from "../../../services/api/auth/accounts/accountsOptions"
import { computationsOptions } from "../../../services/api/auth/computations/computationsOptions"
import { recordsOptions } from "../../../services/api/auth/records/recordsOptions"
import { statementsOptions } from "../../../services/api/auth/statements/statementsOptions"
import { ErrorMessage } from "../../layouts/errorMessage"
import { Section } from "../../layouts/section/section"
import { getBalance } from "../balance/getBalance"
import { groupStatements } from "./groupStatements"
import { StatementTable } from "./statementTable"


export function StatementReport() {
    const statements = useQuery(statementsOptions)
    const computations = useQuery(computationsOptions)
    const accounts = useQuery(accountsOptions)
    const records = useQuery(recordsOptions)

    const rowsData = (records.data ?? [])
        .filter((record) => record.isComputed)
        .sort((a, b) => b.date.localeCompare(a.date))
        .flatMap((record) => record.rows)

    const balance = getBalance(rowsData, accounts.data ?? [])

    const sortedStatements = groupStatements(statements.data ?? [], balance, null)
        .sort((a, b) => a.number - b.number)

    const sortedComputations = (computations.data ?? [])
        .sort((a, b) => a.number - b.number)


    if (accounts.isLoading) return <CircularLoader className="m-3" />
    if (accounts.isError) return <ErrorMessage message={accounts.error.message} />
    if (!accounts.data) return null
    return (
        <Section.Root>
            <Section.Item>
                <div className="min-w-full max-w-full h-full max-h-full overflow-auto rounded-md border border-neutral/10">
                    <StatementTable
                        statements={sortedStatements}
                        computations={sortedComputations}
                    />
                </div>
            </Section.Item>
        </Section.Root>
    )
}
