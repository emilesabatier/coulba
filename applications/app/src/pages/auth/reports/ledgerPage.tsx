import { Main } from "../../../components/layouts/main/main"
import { LedgerContent } from "../../../components/reports/ledger/ledgerContent"


export function LedgerPage() {
    return (
        <Main.Root>
            <Main.Header
                title="Grand livre"
                description="Le grand livre présente les mêmes données que celle du journal mais agrégées par compte."
            >
            </Main.Header>
            <Main.Content>
                <LedgerContent />
            </Main.Content>
        </Main.Root>
    )
}
