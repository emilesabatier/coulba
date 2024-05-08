import { Main } from "../../../components/layouts/main/main"
import { TransactionContent } from "../../../components/transactions/read/transactionContent"


export function ReadTransactionPage() {
    return (
        <Main.Root>
            <Main.Header
                title="Consulter un enregistrement"
                description="Consulter les données de l'enregistrement."
            />
            <TransactionContent />
        </Main.Root>
    )
}
