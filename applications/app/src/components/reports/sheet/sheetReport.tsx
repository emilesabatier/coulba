import { formatPrice } from "@coulba/design/formats"
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

    const sheetAssets = groupSheetsAssets((sheets.data ?? []).filter((sheet) => sheet.side === "asset"), balance, null)
        .sort((a, b) => a.number - b.number)

    const sheetLiabilities = groupSheetsLiabilities((sheets.data ?? []).filter((sheet) => sheet.side === "liability"), balance, null)
        .sort((a, b) => a.label.localeCompare(b.label))

    const totalSheetAsset = sheetAssets.reduce<number>((previous, entry) => previous + Number(entry.net), 0)

    const totalSheetLiability = sheetLiabilities.reduce<number>((previous, entry) => previous + Number(entry.net), 0)

    if (records.isLoading || accounts.isLoading) return <CircularLoader className="m-3" />
    if (records.isError) return <ErrorMessage message={records.error.message} />
    if (accounts.isError) return <ErrorMessage message={accounts.error.message} />
    if (!records.data || !accounts.data) return null
    return (
        <Section.Root>
            <Section.Item className="p-0">
                <div className="w-full grid grid-cols-2 grid-rows-[max-content_auto]">
                    <div className="w-full px-3 py-1.5 border-r border-b border-neutral/10 flex justify-start items-end gap-3">
                        <span className="text-lg uppercase text-neutral/50">Total actif</span>
                        <span className="text-2xl">{formatPrice(totalSheetAsset)}</span>
                    </div>
                    <div className="w-full px-3 py-1.5 border-b border-neutral/10 flex justify-start items-end gap-3">
                        <span className="text-lg uppercase text-neutral/50">Total passif</span>
                        <span className="text-2xl">{formatPrice(totalSheetLiability)}</span>
                    </div>
                    <SheetAssetsTable sheet={sheetAssets} />
                    <SheetLiabilitiesTable sheet={sheetLiabilities} />
                </div>
            </Section.Item>
        </Section.Root>
    )
}
