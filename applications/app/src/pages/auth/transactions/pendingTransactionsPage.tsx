import { Main } from "../../../components/layouts/main/main"
import { PendingTransactionsTable } from "../../../components/pendingTransactions/pendingTransactionsTable"


export function PendingTransactionsPage() {
    return (
        <Main.Root>
            <Main.Header />
            <Main.Content>
                <PendingTransactionsTable />
            </Main.Content>
        </Main.Root>
    )
}
