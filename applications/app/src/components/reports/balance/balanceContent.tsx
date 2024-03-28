import { formatPrice } from "@coulba/design/formats"
import { CircularLoader } from "@coulba/design/layouts"
import { useQuery } from "@tanstack/react-query"
import { accountsOptions } from "../../../services/api/auth/accounts/accountsOptions"
import { recordsOptions } from "../../../services/api/auth/records/recordsOptions"
import { formatAccount } from "../../accounts/format/formatAccount"
import { ErrorMessage } from "../../layouts/errorMessage"
import { BalanceTable } from "./balanceTable"


export type Balance = {
    key: string
    label: string
    sum: {
        debit: number
        credit: number
    }
    balance: {
        debit: number
        credit: number
    }
}

function getBalance(debitAcc: number, creditAcc: number, debitNew: number, creditNew: number) {
    if (debitNew > 0) {
        if (debitAcc > 0) return {
            debit: debitAcc + debitNew,
            credit: 0
        }
        if (debitNew < creditAcc) return {
            debit: 0,
            credit: creditAcc - debitNew
        }
        if (debitNew >= creditAcc) return {
            debit: debitNew - creditAcc,
            credit: 0
        }
        return {
            debit: 0,
            credit: 0
        }
    }

    if (creditNew > 0) {
        if (creditAcc > 0) return {
            debit: 0,
            credit: creditAcc + creditNew
        }
        if (creditNew < debitAcc) return {
            debit: debitAcc - creditNew,
            credit: 0
        }
        if (creditNew >= debitAcc) return {
            debit: 0,
            credit: creditNew - debitAcc
        }
        return {
            debit: 0,
            credit: 0
        }
    }

    return {
        debit: 0,
        credit: 0
    }
}

export function BalanceContent() {
    const records = useQuery(recordsOptions)
    const accounts = useQuery(accountsOptions)

    const balance = (records.data ?? [])
        .reduce<Balance[]>((_balance, _record) => {

            const debit = Number(_record.debit)
            const credit = Number(_record.credit)
            const entry = {
                key: _record.idAccount,
                sum: {
                    debit: debit,
                    credit: credit
                },
                balance: {
                    debit: (debit > credit) ? (debit - credit) : 0,
                    credit: (debit <= credit) ? (credit - debit) : 0,
                }
            }

            const currentBalanceEntry = _balance.find((entry) => entry.key === _record.idAccount)
            if (currentBalanceEntry === undefined) {
                const account = accounts.data?.find((_account) => _account.id === _record.idAccount)
                if (!account) return _balance

                _balance.push({
                    ...entry,
                    label: formatAccount(account)
                })
                return _balance
            }

            currentBalanceEntry.sum.debit += Number(_record.debit)
            currentBalanceEntry.sum.credit += Number(_record.credit)
            currentBalanceEntry.balance = getBalance(currentBalanceEntry.balance.debit, currentBalanceEntry.balance.credit, entry.balance.debit, entry.balance.credit)

            return _balance
        }, [])
        .sort((a, b) => a.label.localeCompare(b.label))

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
                <div className="w-full p-4 border border-neutral/25 rounded-md flex justify-start items-center gap-4">
                    <span className="text-2xl text-neutral/50">Solde débiteur total</span>
                    <span className="text-2xl">{formatPrice(totalBalanceDebit)}</span>
                </div>
                <div className="w-full p-4 border border-neutral/25 rounded-md flex justify-start items-center gap-4">
                    <span className="text-2xl text-neutral/50">Solde créditeur total</span>
                    <span className="text-2xl">{formatPrice(totalBalanceCredit)}</span>
                </div>
            </div>
            <BalanceTable balance={balance} />
        </div>
    )
}
