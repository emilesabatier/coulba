import { ComputationsList } from "../../../../components/computations/computationsList"
import { Main } from "../../../../components/layouts/main"
import { StatementsList } from "../../../../components/statements/statementsList"
import { useCurrentYear } from "../../../../contexts/currentYear/useCurrentYear"


export function StatementsPage() {
    const currentYear = useCurrentYear()

    if (!currentYear.data) return null
    return (
        <Main>
            <StatementsList />
            <ComputationsList />
        </Main>
    )
}
