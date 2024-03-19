import { ButtonPlain } from "@coulba/design/buttons"
import { IconPlus } from "@tabler/icons-react"
import { Main } from "../../../components/layouts/main/main"
import { CreateTransaction } from "../../../components/transactions/createTransaction/createTransaction"
import { TransactionsTable } from "../../../components/transactions/transactionsTable"


export function TransactionsPage() {
    return (
        <Main.Root>
            <Main.Header
                title="Enregistrements"
                description="Vous trouverez sur cette page la liste des enregistrements comptables provisoires, avant leur validation et ajout définitif au journal."
            />
            <Main.Content>
                <div className="flex flex-col justify-start items-stretch gap-2">
                    <CreateTransaction>
                        <ButtonPlain
                            icon={<IconPlus />}
                            text="Ajouter un enregistrement"
                        />
                    </CreateTransaction>
                    <TransactionsTable />
                </div>
            </Main.Content>
        </Main.Root>
    )
}
