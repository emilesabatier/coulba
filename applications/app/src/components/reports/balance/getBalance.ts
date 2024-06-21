import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"


export type Account = {
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
    const accountsArray = rows.reduce<Array<Account>>((accountsArray, row) => {
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

        const currentEntry = accountsArray.find((accountEntry) => accountEntry.account.id === row.idAccount)
        if (currentEntry === undefined) {
            accountsArray.push(entry)
            return accountsArray
        }

        currentEntry.sum.debit += entry.sum.debit
        currentEntry.sum.credit += entry.sum.credit

        return accountsArray
    }, [])

    return accountsArray
        .map((accountEntry) => {
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



export type Balance = {
    classNumber: number
    sum: {
        debit: number
        credit: number
    }
    balance: {
        debit: number
        credit: number
    }
    accounts: Array<Account>
}

export function getGroupedBalance(balance: Array<Account>) {
    const balanceArray: Array<Balance> = []

    balance
        .forEach((accountEntry) => {
            const classNumber = Number(accountEntry.account.number.toString().at(0))

            const index = balanceArray.findIndex((balance) => balance.classNumber === classNumber)
            if (index === -1) {
                balanceArray.push({
                    classNumber: classNumber,
                    sum: {
                        debit: accountEntry.sum.debit,
                        credit: accountEntry.sum.credit
                    },
                    balance: {
                        debit: accountEntry.balance.debit,
                        credit: accountEntry.balance.credit
                    },
                    accounts: [accountEntry]
                })
            } else {
                const balanceEntry = balanceArray.at(index)
                if (!balanceEntry) return

                balanceEntry.accounts.push(accountEntry)
                balanceEntry.sum.debit += accountEntry.sum.debit
                balanceEntry.sum.credit += accountEntry.sum.credit

            }
        })

    return balanceArray.map((balanceEntry) => {
        const algebricBalance = balanceEntry.sum.debit - balanceEntry.sum.credit
        const balance = {
            debit: (algebricBalance > 0) ? algebricBalance : 0,
            credit: (algebricBalance < 0) ? -algebricBalance : 0
        }
        return ({
            ...balanceEntry,
            balance: balance
        })
    })
}