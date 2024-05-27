import { CircularLoader } from "@coulba/design/layouts"
import { useQuery } from "@tanstack/react-query"
import { accountsOptions } from "../../../services/api/auth/accounts/accountsOptions"
import { transactionsOptions } from "../../../services/api/auth/transactions/transactionsOptions"
import { formatAccount } from "../../accounts/format/formatAccount"
import { ErrorMessage } from "../../layouts/errorMessage"
import { LedgerTable } from "./ledgerTable"


export type Ledger = {
    key: string
    label: string
    debit: number
    credit: number
    transactions: {
        key: string
        date: string
        label: string
        debit: string
        credit: string
    }[]
}

export function LedgerContent() {
    const transactions = useQuery(transactionsOptions)
    const accounts = useQuery(accountsOptions)

    const ledger = (transactions.data ?? [])
        .reduce<Ledger[]>((_ledger, _transaction) => {

            const transaction = {
                key: _transaction.id,
                date: _transaction.date,
                label: _transaction.label,
                debit: _transaction.debit,
                credit: _transaction.credit
            }

            const currentLedgerEntry = _ledger.find((entry) => entry.key === _transaction.idAccount)
            if (currentLedgerEntry === undefined) {
                const account = accounts.data?.find((_account) => _account.id === _transaction.idAccount)
                if (!account) return _ledger
                _ledger.push({
                    key: _transaction.idAccount,
                    label: formatAccount(account),
                    debit: Number(transaction.debit),
                    credit: Number(transaction.credit),
                    transactions: [transaction]
                })
                return _ledger
            }

            currentLedgerEntry.debit += Number(transaction.debit)
            currentLedgerEntry.credit += Number(transaction.credit)
            currentLedgerEntry.transactions.push(transaction)

            return _ledger
        }, [])
        .sort((a, b) => a.label.localeCompare(b.label))

    if (transactions.isLoading || accounts.isLoading) return <CircularLoader />
    if (transactions.isError) return <ErrorMessage message={transactions.error.message} />
    if (accounts.isError) return <ErrorMessage message={accounts.error.message} />
    if (!transactions.data || !accounts.data) return null
    return (
        <div className="w-full h-full flex flex-col justify-start items-stretch gap-3">
            <LedgerTable ledger={ledger} />
        </div>
    )
}
