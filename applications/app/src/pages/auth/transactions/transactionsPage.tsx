import { Main } from "../../../components/layouts/main/main"
import { Section } from "../../../components/layouts/section/section"
import { ConfirmedTransactions } from "../../../components/transactions/table/confirmedTransactions"
import { PendingTransactions } from "../../../components/transactions/table/pendingTransactions"


export function TransactionsPage() {
    return (
        <Main.Root>
            <Main.Header
                title="Enregistrements"
                description="Vous trouverez sur cette page la liste des enregistrements comptables provisoires, avant leur validation et ajout définitif au journal."
            />
            <Main.Content>
                <Section.Root>
                    <Section.Header title="Enregistrements non validés" />
                    <Section.Content>
                        <PendingTransactions />
                    </Section.Content>
                </Section.Root>
                <Section.Root>
                    <Section.Header title="Enregistrements validés" />
                    <Section.Content>
                        <ConfirmedTransactions />
                    </Section.Content>
                </Section.Root>
            </Main.Content>
        </Main.Root>
    )
}
