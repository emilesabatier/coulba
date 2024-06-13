import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"


// function getBalanceEntry(debitAcc: number, creditAcc: number, debitNew: number, creditNew: number) {
//     if (debitNew > 0) {
//         if (debitAcc > 0) return {
//             debit: debitAcc + debitNew,
//             credit: 0
//         }
//         if (debitNew < creditAcc) return {
//             debit: 0,
//             credit: creditAcc - debitNew
//         }
//         if (debitNew >= creditAcc) return {
//             debit: debitNew - creditAcc,
//             credit: 0
//         }
//         return {
//             debit: 0,
//             credit: 0
//         }
//     }

//     if (creditNew > 0) {
//         if (creditAcc > 0) return {
//             debit: 0,
//             credit: creditAcc + creditNew
//         }
//         if (creditNew < debitAcc) return {
//             debit: debitAcc - creditNew,
//             credit: 0
//         }
//         if (creditNew >= debitAcc) return {
//             debit: 0,
//             credit: creditNew - debitAcc
//         }
//         return {
//             debit: 0,
//             credit: 0
//         }
//     }

//     return {
//         debit: 0,
//         credit: 0
//     }
// }


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
