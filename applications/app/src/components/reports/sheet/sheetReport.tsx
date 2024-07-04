import { FormatPrice } from "@coulba/design/formats"
import { CircularLoader } from "@coulba/design/layouts"
import { useQuery } from "@tanstack/react-query"
import { accountsOptions } from "../../../services/api/auth/accounts/accountsOptions"
import { recordsOptions } from "../../../services/api/auth/records/recordsOptions"
import { sheetsOptions } from "../../../services/api/auth/sheets/sheetsOptions"
import { ErrorMessage } from "../../layouts/errorMessage"
import { Section } from "../../layouts/section/section"
import { getBalance } from "../balance/getBalance"
import { groupSheetsAssets, groupSheetsLiabilities } from "./groupSheets"
import { SheetAssetsTable } from "./sheetAssetsTable"
import { SheetLiabilitiesTable } from "./sheetLiabilitiesTable"


export function SheetReport() {
    const sheets = useQuery(sheetsOptions)
    const records = useQuery(recordsOptions)
    const accounts = useQuery(accountsOptions)

    const rowsData = (records.data ?? [])
        .filter((record) => record.isComputed)
        .sort((a, b) => b.date.localeCompare(a.date))
        .flatMap((record) => record.rows)

    const balance = getBalance(rowsData, accounts.data ?? [])

    const sheetsData = (sheets.data ?? [])

    const sheetAssets = groupSheetsAssets(sheetsData.filter((sheet) => sheet.side === "asset"), balance, null)
        .sort((a, b) => a.number.toString().localeCompare(b.number.toString()))

    const sheetLiabilities = groupSheetsLiabilities(sheetsData.filter((sheet) => sheet.side === "liability"), balance, null)
        .sort((a, b) => a.number.toString().localeCompare(b.number.toString()))

    const totalSheetAsset = sheetAssets.reduce<number>((previous, entry) => previous + Number(entry.net), 0)

    const totalSheetLiability = sheetLiabilities.reduce<number>((previous, entry) => previous + Number(entry.net), 0)

    if (records.isLoading || accounts.isLoading) return <CircularLoader className="m-3" />
    if (records.isError) return <ErrorMessage message={records.error.message} />
    if (accounts.isError) return <ErrorMessage message={accounts.error.message} />
    if (!records.data || !accounts.data) return null
    return (
        <Section.Root>
            <Section.Item>
                <div className="w-full min-w-full max-w-full h-full max-h-full grid grid-cols-2 grid-rows-[max-content_auto] overflow-auto rounded-md border border-neutral/10">
                    <div className="w-full px-3 py-1.5 border-r border-b border-neutral/10 flex justify-between items-center gap-3">
                        <span className="text-lg uppercase text-neutral/50">Actif</span>
                        <FormatPrice price={totalSheetAsset} />
                    </div>
                    <div className="w-full px-3 py-1.5 border-r border-b border-neutral/10 flex justify-between items-center gap-3">
                        <span className="text-lg uppercase text-neutral/50">Passif</span>
                        <FormatPrice price={totalSheetLiability} />
                    </div>
                    <SheetAssetsTable sheet={sheetAssets} />
                    <SheetLiabilitiesTable sheet={sheetLiabilities} />
                </div>
            </Section.Item>
        </Section.Root>
    )
}
