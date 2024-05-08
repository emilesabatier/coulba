import { ButtonPlain } from "@coulba/design/buttons"
import { CircularLoader } from "@coulba/design/layouts"
import { IconPlus } from "@tabler/icons-react"
import { useQuery } from "@tanstack/react-query"
import { transactionsOptions } from "../../../services/api/auth/transactions/transactionsOptions"
import { ErrorMessage } from "../../layouts/errorMessage"
import { CreateTransaction } from "../create/createTransaction"
import { TransactionsTable } from "./transactionsTable"


export function PendingTransactions() {
    const transactions = useQuery(transactionsOptions)

    if (transactions.isLoading) return <CircularLoader />
    if (transactions.isError) return <ErrorMessage message={transactions.error.message} />
    if (!transactions.data) return null

    const pendingTransactions = transactions.data
        .filter((transaction) => !transaction.isConfirmed)

    return (
        <TransactionsTable
            transactions={pendingTransactions}
        >
            <CreateTransaction>
                <ButtonPlain
                    icon={<IconPlus />}
                    text="Ajouter un enregistrement"
                />
            </CreateTransaction>
        </TransactionsTable>
    )
}
