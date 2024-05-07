import { formatPrice } from "@coulba/design/formats"
import { CircularLoader } from "@coulba/design/layouts"
import { auth } from "@coulba/schemas/routes"
import { useQuery } from "@tanstack/react-query"
import * as v from "valibot"
import { accountsOptions } from "../../../services/api/auth/accounts/accountsOptions"
import { recordsOptions } from "../../../services/api/auth/records/recordsOptions"
import { sheetsOptions } from "../../../services/api/auth/sheets/sheetsOptions"
import { Balance, getBalance } from "../../../services/reports/getBalance"
import { ErrorMessage } from "../../layouts/errorMessage"
import { SheetAssetsTable } from "./sheetAssetsTable"
import { SheetLiabilitiesTable } from "./sheetLiabilitiesTable"


export type SheetAsset = {
    key: string
    number: number
    label: string
    gross: number
    allowance: number
    net: number
    sheets: SheetAsset[]
}

export type SheetLiability = {
    key: string
    number: number
    label: string
    net: number
    sheets: SheetLiability[]
}

function groupSheetsAssets(sheets: v.Output<typeof auth.sheets.get.return>[], balance: Balance[], idParent?: string | null): SheetAsset[] {
    return sheets
        .filter((sheet) => sheet.idParent === idParent)
        .map((sheet) => {
            const childrenSheets = groupSheetsAssets(sheets, balance, sheet.id)

            let gross = 0
            let allowance = 0
            let net = 0

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

            net = gross - allowance

            return ({
                key: sheet.id,
                number: sheet.number,
                label: sheet.label,
                gross: gross,
                allowance: allowance,
                net: net,
                sheets: childrenSheets
            })
        })
}

function groupSheetsLiabilities(sheets: v.Output<typeof auth.sheets.get.return>[], balance: Balance[], idParent?: string | null): SheetLiability[] {
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
                key: sheet.id,
                number: sheet.number,
                label: sheet.label,
                net: net,
                sheets: childrenSheets
            })
        })
}

export function SheetContent() {
    const sheets = useQuery(sheetsOptions)
    const records = useQuery(recordsOptions)
    const accounts = useQuery(accountsOptions)

    const balance = getBalance(records.data ?? [], accounts.data ?? [])

    const sheetAssets = groupSheetsAssets((sheets.data ?? []).filter((sheet) => sheet.side === "asset"), balance, null)
        .sort((a, b) => a.number - b.number)

    const sheetLiabilities = groupSheetsLiabilities((sheets.data ?? []).filter((sheet) => sheet.side === "liability"), balance, null)
        .sort((a, b) => a.label.localeCompare(b.label))

    const totalSheetAsset = sheetAssets.reduce<number>((previous, entry) => previous + Number(entry.net), 0)

    const totalSheetLiability = sheetLiabilities.reduce<number>((previous, entry) => previous + Number(entry.net), 0)

    if (records.isLoading || accounts.isLoading) return <CircularLoader />
    if (records.isError) return <ErrorMessage message={records.error.message} />
    if (accounts.isError) return <ErrorMessage message={accounts.error.message} />
    if (!records.data || !accounts.data) return null
    return (
        <div className="w-full h-full flex flex-col justify-start items-stretch gap-4">
            <div className="flex justify-center items-center gap-2">
                <div className="w-full p-4 border border-neutral/20 rounded-md flex justify-start items-center gap-4">
                    <span className="text-2xl text-neutral/50">Total actif</span>
                    <span className="text-2xl">{formatPrice(totalSheetAsset)}</span>
                </div>
                <div className="w-full p-4 border border-neutral/20 rounded-md flex justify-start items-center gap-4">
                    <span className="text-2xl text-neutral/50">Total passif</span>
                    <span className="text-2xl">{formatPrice(totalSheetLiability)}</span>
                </div>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-2">
                <SheetAssetsTable sheet={sheetAssets} />
                <SheetLiabilitiesTable sheet={sheetLiabilities} />
            </div>
        </div>
    )
}
