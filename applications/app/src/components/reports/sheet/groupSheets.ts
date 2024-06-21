import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { Account } from "../balance/getBalance"


export type SheetAsset = {
    id: string
    number: number
    label: string
    gross: number
    allowance: number
    net: number
    sheets: SheetAsset[]
}

export type SheetLiability = {
    id: string
    number: number
    label: string
    net: number
    sheets: SheetLiability[]
}

export function groupSheetsAssets(sheets: v.Output<typeof auth.sheets.get.return>[], balance: Array<Account>, idParent?: string | null): SheetAsset[] {
    return sheets
        .filter((sheet) => sheet.idParent === idParent)
        .map((sheet) => {
            const childrenSheets = groupSheetsAssets(sheets, balance, sheet.id)

            let gross = 0
            let allowance = 0

            if (childrenSheets.length === 0) {
                sheet.accountSheets.forEach((accountSheet) => {
                    balance
                        .filter((_balance) => _balance.account.id === accountSheet.idAccount)
                        .forEach((_balance) => {
                            gross += accountSheet.isAllowance ? 0 : (accountSheet.flow === "debit" ? _balance.balance.debit : _balance.balance.credit)
                            allowance += !accountSheet.isAllowance ? 0 : (accountSheet.flow === "debit" ? _balance.balance.debit : _balance.balance.credit)
                        })
                })
            } else {
                childrenSheets.forEach((childSheet) => {
                    gross += childSheet.gross
                    allowance += childSheet.allowance
                })
            }

            return ({
                id: sheet.id,
                number: sheet.number,
                label: sheet.label,
                gross: gross + Number(sheet.addedGrossAmount),
                allowance: allowance + Number(sheet.addedAllowanceAmount),
                net: gross - allowance + Number(sheet.addedGrossAmount) - Number(sheet.addedAllowanceAmount),
                sheets: childrenSheets
            })
        })
}

export function groupSheetsLiabilities(sheets: v.Output<typeof auth.sheets.get.return>[], balance: Array<Account>, idParent?: string | null): SheetLiability[] {
    return sheets
        .filter((sheet) => sheet.idParent === idParent)
        .map((sheet) => {
            const childrenSheets = groupSheetsAssets(sheets, balance, sheet.id)

            let net = 0

            if (childrenSheets.length === 0) {
                sheet.accountSheets.forEach((accountSheet) => {
                    balance
                        .filter((_balance) => _balance.account.id === accountSheet.idAccount)
                        .forEach((_balance) => {
                            net += (accountSheet.flow === "credit" ? _balance.balance.credit : _balance.balance.debit)
                        })
                })
            } else {
                childrenSheets.forEach((childSheet) => {
                    net += childSheet.net
                })
            }

            return ({
                id: sheet.id,
                number: sheet.number,
                label: sheet.label,
                net: net + Number(sheet.addedAllowanceAmount) + Number(sheet.addedGrossAmount),
                sheets: childrenSheets
            })
        })
}
