import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"


function getBalanceEntry(debitAcc: number, creditAcc: number, debitNew: number, creditNew: number) {
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


export type Balance = {
    account: v.Output<typeof auth.accounts.get.return>
    sum: {
        debit: number
        credit: number
    }
    balance: {
        debit: number
        credit: number
    }
}

export function getBalance(transactions: v.Output<typeof auth.transactions.get.return>[], accounts: v.Output<typeof auth.accounts.get.return>[]) {
    return transactions.reduce<Balance[]>((_balance, _transaction) => {
        const account = accounts.find((_account) => _account.id === _transaction.idAccount)
        if (!account) return _balance

        const debit = Number(_transaction.debit)
        const credit = Number(_transaction.credit)
        const entry = {
            account: account,
            sum: {
                debit: debit,
                credit: credit
            },
            balance: {
                debit: (debit > credit) ? (debit - credit) : 0,
                credit: (debit <= credit) ? (credit - debit) : 0,
            }
        }

        const currentBalanceEntry = _balance.find((entry) => entry.account.id === _transaction.idAccount)
        if (currentBalanceEntry === undefined) {

            _balance.push(entry)
            return _balance
        }

        currentBalanceEntry.sum.debit += Number(_transaction.debit)
        currentBalanceEntry.sum.credit += Number(_transaction.credit)
        currentBalanceEntry.balance = getBalanceEntry(currentBalanceEntry.balance.debit, currentBalanceEntry.balance.credit, entry.balance.debit, entry.balance.credit)

        return _balance
    }, [])
}
