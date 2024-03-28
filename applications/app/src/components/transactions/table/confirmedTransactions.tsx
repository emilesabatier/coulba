import { CircularLoader } from "@coulba/design/layouts"
import { useQuery } from "@tanstack/react-query"
import { transactionsOptions } from "../../../services/api/auth/transactions/transactionsOptions"
import { ErrorMessage } from "../../layouts/errorMessage"
import { TransactionsTable } from "./transactionsTable"


export function ConfirmedTransactions() {
    const transactions = useQuery(transactionsOptions)

    if (transactions.isLoading) return <CircularLoader />
    if (transactions.isError) return <ErrorMessage message={transactions.error.message} />
    if (!transactions.data) return null

    const confirmedTransactions = transactions.data
        .filter((transaction) => transaction.isConfirmed)

    return (
        <TransactionsTable
            transactions={confirmedTransactions}
        >
            <div />
        </TransactionsTable>
    )
}
