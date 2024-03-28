import { CircularLoader } from "@coulba/design/layouts"
import { auth } from "@coulba/schemas/routes"
import { useQuery } from "@tanstack/react-query"
import * as v from "valibot"
import { accountsOptions } from "../../../services/api/auth/accounts/accountsOptions"
import { recordsOptions } from "../../../services/api/auth/records/recordsOptions"
import { sheetsOptions } from "../../../services/api/auth/sheets/sheetsOptions"
import { ErrorMessage } from "../../layouts/errorMessage"
import { SheetAssetsTable } from "./sheetAssetsTable"


export type SheetAsset = {
    key: string
    number: number
    label: string
    gross: number | null
    allowance: number | null
    net: number | null
    sheets: SheetAsset[]
}

export type SheetLiability = {
    key: string
    number: number
    label: string
    gross: number | null
    net: number | null
    sheets: SheetLiability[]
}

function groupSheetsAssets(sheets: v.Output<typeof auth.sheets.get.return>[], idParent?: string | null): SheetAsset[] {
    return sheets
        .filter((sheet) => sheet.idSheetParent === idParent)
        .map((sheet) => {
            const gross = 0
            const allowance = 0
            const net = 0
            return ({
                key: sheet.id,
                number: sheet.number,
                label: sheet.label,
                gross: gross,
                allowance: allowance,
                net: net,
                sheets: groupSheetsAssets(sheets, sheet.id)
            })
        })
}

function groupSheetsLiabilities(sheets: v.Output<typeof auth.sheets.get.return>[], idParent?: string | null): SheetLiability[] {
    return sheets
        .filter((sheet) => sheet.idSheetParent === idParent)
        .map((sheet) => {
            const gross = 0
            const net = 0
            return ({
                key: sheet.id,
                number: sheet.number,
                label: sheet.label,
                gross: gross,
                net: net,
                sheets: groupSheetsLiabilities(sheets, sheet.id)
            })
        })
}

export function SheetContent() {
    const sheets = useQuery(sheetsOptions)
    const records = useQuery(recordsOptions)
    const accounts = useQuery(accountsOptions)

    const sheetAssets = groupSheetsAssets((sheets.data ?? []).filter((sheet) => sheet.side === "asset"), null)
        .sort((a, b) => a.label.localeCompare(b.label))

    const sheetLiabilities = groupSheetsLiabilities((sheets.data ?? []).filter((sheet) => sheet.side === "liability"), null)
        .sort((a, b) => a.label.localeCompare(b.label))

    // const totalSheetDebit = sheet.reduce<number>((previous, entry) => {
    //     return previous + Number(entry.sheet.debit)
    // }, 0)

    // const totalSheetCredit = sheet.reduce<number>((previous, entry) => {
    //     return previous + Number(entry.sheet.credit)
    // }, 0)

    if (records.isLoading || accounts.isLoading) return <CircularLoader />
    if (records.isError) return <ErrorMessage message={records.error.message} />
    if (accounts.isError) return <ErrorMessage message={accounts.error.message} />
    if (!records.data || !accounts.data) return null
    return (
        <div className="w-full h-full flex flex-col justify-start items-stretch gap-4">
            {/* <div className="flex justify-center items-center gap-2">
                <div className="w-full p-4 border border-neutral/25 rounded-md flex justify-start items-center gap-4">
                    <span className="text-2xl text-neutral/50">Solde débiteur total</span>
                    <span className="text-2xl">{formatPrice(totalSheetDebit)}</span>
                </div>
                <div className="w-full p-4 border border-neutral/25 rounded-md flex justify-start items-center gap-4">
                    <span className="text-2xl text-neutral/50">Solde créditeur total</span>
                    <span className="text-2xl">{formatPrice(totalSheetCredit)}</span>
                </div>
            </div> */}
            <SheetAssetsTable sheet={sheetAssets} />
            {/* <SheetLiabilitiesTable sheet={sheetLiabilities} /> */}
        </div>
    )
}
