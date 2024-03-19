import { ButtonOutline } from "@coulba/design/buttons"
import { Main } from "../../../components/layouts/main/main"
import { CreateTransaction } from "../../../components/transactions/createTransaction/createTransaction"
import { TransactionsTable } from "../../../components/transactions/transactionsTable"


export function TransactionsPage() {
    return (
        <Main.Root>
            <Main.Header
                title="Enregistrements"
                description="Vous trouverez sur cette page la liste des enregistrements comptables provisoires, avant leur validation et ajout définitif au journal."
            >
                <CreateTransaction>
                    <ButtonOutline
                        text="Ajouter un enregistrement"
                    />
                </CreateTransaction>
            </Main.Header>
            <Main.Content>
                <TransactionsTable />
            </Main.Content>
        </Main.Root>
    )
}
