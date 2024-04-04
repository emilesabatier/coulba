import { formatPrice } from "@coulba/design/formats"
import { CircularLoader } from "@coulba/design/layouts"
import { useQuery } from "@tanstack/react-query"
import { accountsOptions } from "../../../services/api/auth/accounts/accountsOptions"
import { recordsOptions } from "../../../services/api/auth/records/recordsOptions"
import { getBalance } from "../../../services/reports/getBalance"
import { ErrorMessage } from "../../layouts/errorMessage"
import { BalanceTable } from "./balanceTable"


export function BalanceContent() {
    const records = useQuery(recordsOptions)
    const accounts = useQuery(accountsOptions)

    const balance = getBalance(records.data ?? [], accounts.data ?? [])
        .sort((a, b) => a.account.number.toString().localeCompare(b.account.number.toString()))

    const totalBalanceDebit = balance.reduce<number>((previous, entry) => {
        return previous + Number(entry.balance.debit)
    }, 0)

    const totalBalanceCredit = balance.reduce<number>((previous, entry) => {
        return previous + Number(entry.balance.credit)
    }, 0)

    if (records.isLoading || accounts.isLoading) return <CircularLoader />
    if (records.isError) return <ErrorMessage message={records.error.message} />
    if (accounts.isError) return <ErrorMessage message={accounts.error.message} />
    if (!records.data || !accounts.data) return null
    return (
        <div className="w-full h-full flex flex-col justify-start items-stretch gap-4">
            <div className="flex justify-center items-center gap-2">
                <div className="w-full p-4 border border-neutral/20 rounded-md flex justify-start items-center gap-4">
                    <span className="text-2xl text-neutral/50">Solde débiteur total</span>
                    <span className="text-2xl">{formatPrice(totalBalanceDebit)}</span>
                </div>
                <div className="w-full p-4 border border-neutral/20 rounded-md flex justify-start items-center gap-4">
                    <span className="text-2xl text-neutral/50">Solde créditeur total</span>
                    <span className="text-2xl">{formatPrice(totalBalanceCredit)}</span>
                </div>
            </div>
            <BalanceTable balance={balance} />
        </div>
    )
}
