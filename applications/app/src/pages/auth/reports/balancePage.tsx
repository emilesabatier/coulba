import { Main } from "../../../components/layouts/main/main"
import { BalanceContent } from "../../../components/reports/balance/balanceContent"


export function BalancePage() {
    return (
        <Main.Root>
            <Main.Header
                title="Balance"
                description="La balance comptable agrège le débit & crédit des opérations par compte et affiche le solde de chacun."
            >
            </Main.Header>
            <Main.Content>
                <BalanceContent />
            </Main.Content>
        </Main.Root>
    )
}
