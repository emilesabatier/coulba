import { ComputationsList } from "../../../../components/computations/computationsList"
import { Main } from "../../../../components/layouts/main"
import { StatementsList } from "../../../../components/statements/statementsList"


export function StatementsPage() {
    return (
        <Main>
            <StatementsList />
            <ComputationsList />
        </Main>
    )
}
