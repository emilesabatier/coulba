import { ButtonOutline } from "@coulba/design/buttons"
import { Main } from "../../../components/layouts/main/main"
import { CreateTransaction } from "../../../components/transactions/createTransaction/createTransaction"
import { TransactionsTable } from "../../../components/transactions/transactionsTable"


export function TransactionsPage() {
    return (
        <Main.Root>
            <Main.Header />
            <Main.Content>
                <CreateTransaction>
                    <ButtonOutline
                        text="Ajouter un enregistrement"
                    />
                </CreateTransaction>
                <TransactionsTable />
            </Main.Content>
        </Main.Root>
    )
}
