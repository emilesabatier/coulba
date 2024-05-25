import { CircularLoader } from "@coulba/design/layouts"
import { useQuery } from "@tanstack/react-query"
import { accountsOptions } from "../../../services/api/auth/accounts/accountsOptions"
import { recordsOptions } from "../../../services/api/auth/records/recordsOptions"
import { formatAccount } from "../../accounts/format/formatAccount"
import { ErrorMessage } from "../../layouts/errorMessage"
import { LedgerTable } from "./ledgerTable"


export type Ledger = {
    key: string
    label: string
    debit: number
    credit: number
    records: {
        key: string
        date: string
        label: string
        debit: string
        credit: string
    }[]
}

export function LedgerContent() {
    const records = useQuery(recordsOptions)
    const accounts = useQuery(accountsOptions)

    const ledger = (records.data ?? [])
        .reduce<Ledger[]>((_ledger, _record) => {

            const record = {
                key: _record.id,
                date: _record.date,
                label: _record.label,
                debit: _record.debit,
                credit: _record.credit
            }

            const currentLedgerEntry = _ledger.find((entry) => entry.key === _record.idAccount)
            if (currentLedgerEntry === undefined) {
                const account = accounts.data?.find((_account) => _account.id === _record.idAccount)
                if (!account) return _ledger
                _ledger.push({
                    key: _record.idAccount,
                    label: formatAccount(account),
                    debit: Number(record.debit),
                    credit: Number(record.credit),
                    records: [record]
                })
                return _ledger
            }

            currentLedgerEntry.debit += Number(record.debit)
            currentLedgerEntry.credit += Number(record.credit)
            currentLedgerEntry.records.push(record)

            return _ledger
        }, [])
        .sort((a, b) => a.label.localeCompare(b.label))

    if (records.isLoading || accounts.isLoading) return <CircularLoader />
    if (records.isError) return <ErrorMessage message={records.error.message} />
    if (accounts.isError) return <ErrorMessage message={accounts.error.message} />
    if (!records.data || !accounts.data) return null
    return (
        <div className="w-full h-full flex flex-col justify-start items-stretch gap-3">
            <LedgerTable ledger={ledger} />
        </div>
    )
}
