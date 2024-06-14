import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"


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

export function getBalance(rows: v.Output<typeof auth.rows.get.return>[], accounts: v.Output<typeof auth.accounts.get.return>[]) {
    const accountsArray = rows.reduce<Balance[]>((accountsArray, row) => {
        const account = accounts.find((account) => account.id === row.idAccount)
        if (!account) return accountsArray

        const debit = Number(row.debit)
        const credit = Number(row.credit)
        const entry = {
            account: account,
            sum: {
                debit: debit,
                credit: credit
            },
            balance: {
                debit: 0,
                credit: 0
            }
        }

        const currentEntry = accountsArray.find((entry) => entry.account.id === row.idAccount)
        if (currentEntry === undefined) {
            accountsArray.push(entry)
            return accountsArray
        }

        currentEntry.sum.debit += entry.sum.debit
        currentEntry.sum.credit += entry.sum.credit

        return accountsArray
    }, [])

    return accountsArray.map((accountEntry) => {
        const algebricBalance = accountEntry.sum.debit - accountEntry.sum.credit
        const balance = {
            debit: (algebricBalance > 0) ? algebricBalance : 0,
            credit: (algebricBalance < 0) ? -algebricBalance : 0
        }
        return ({
            ...accountEntry,
            balance: balance
        })
    })
}
