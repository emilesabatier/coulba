import { CircularLoader } from "@coulba/design/layouts"
import { useQuery } from "@tanstack/react-query"
import { accountsOptions } from "../../../services/api/auth/accounts/accountsOptions"
import { rowsOptions } from "../../../services/api/auth/rows/rowsOptions"
import { formatAccount } from "../../accounts/format/formatAccount"
import { ErrorMessage } from "../../layouts/errorMessage"
import { LedgerTable } from "./ledgerTable"


export type Ledger = {
    key: string
    label: string
    debit: number
    credit: number
    rows: {
        key: string
        label: string
        debit: number | string
        credit: number | string
    }[]
}

export function LedgerContent() {
    const rows = useQuery(rowsOptions)
    const accounts = useQuery(accountsOptions)

    const ledger = (rows.data ?? [])
        .reduce<Ledger[]>((_ledger, _row) => {

            const row = {
                key: _row.id,
                label: _row.label,
                debit: _row.debit,
                credit: _row.credit
            }

            const currentLedgerEntry = _ledger.find((entry) => entry.key === _row.idAccount)
            if (currentLedgerEntry === undefined) {
                const account = accounts.data?.find((_account) => _account.id === _row.idAccount)
                if (!account) return _ledger
                _ledger.push({
                    key: _row.idAccount,
                    label: formatAccount(account),
                    debit: Number(row.debit),
                    credit: Number(row.credit),
                    rows: [row]
                })
                return _ledger
            }

            currentLedgerEntry.debit += Number(row.debit)
            currentLedgerEntry.credit += Number(row.credit)
            currentLedgerEntry.rows.push(row)

            return _ledger
        }, [])
        .sort((a, b) => a.label.localeCompare(b.label))

    if (rows.isLoading || accounts.isLoading) return <CircularLoader className="m-3" />
    if (rows.isError) return <ErrorMessage message={rows.error.message} />
    if (accounts.isError) return <ErrorMessage message={accounts.error.message} />
    if (!rows.data || !accounts.data) return null
    return (
        <div className="w-full h-full flex flex-col justify-start items-stretch gap-3">
            <LedgerTable ledger={ledger} />
        </div>
    )
}
