import { formatPrice } from "@coulba/design/formats"
import { CircularLoader } from "@coulba/design/layouts"
import { IconAlertTriangle } from "@tabler/icons-react"
import { useQuery } from "@tanstack/react-query"
import { recordsOptions } from "../../../services/api/auth/records/recordsOptions"
import { ErrorMessage } from "../../layouts/errorMessage"
import { RecordsTable } from "./recordsTable"


export function RecordsContent() {
    const records = useQuery(recordsOptions)

    const recordsData = (records.data ?? [])
        .sort((a, b) => b.date.localeCompare(a.date))

    const totalDebit = recordsData.reduce<number>((previous, record) => {
        return previous + Number(record.debit)
    }, 0)

    const totalCredit = recordsData.reduce<number>((previous, record) => {
        return previous + Number(record.credit)
    }, 0)

    if (records.isLoading) return <CircularLoader />
    if (records.isError) return <ErrorMessage message={records.error.message} />
    if (!records.data) return null
    return (
        <div className="w-full h-full flex flex-col justify-start items-stretch gap-4">
            {
                (formatPrice(totalDebit) === formatPrice(totalCredit)) ? null : (
                    <div className="border border-warning rounded-md p-4 bg-warning/5 flex justify-start items-start gap-4">
                        <IconAlertTriangle className="stroke-warning" />
                        <p className="text-warning">Attention, le total de la colonne débit et le total de la colonne crédit sont différents. Des ajustements sont nécessaires de votre part.</p>
                    </div>
                )
            }
            <div className="flex justify-center items-center gap-2">
                <div className="w-full p-4 border border-neutral/25 rounded-md flex justify-start items-center gap-4">
                    <span className="text-2xl text-neutral/50">Débit total</span>
                    <span className="text-2xl">{formatPrice(totalDebit)}</span>
                </div>
                <div className="w-full p-4 border border-neutral/25 rounded-md flex justify-start items-center gap-4">
                    <span className="text-2xl text-neutral/50">Crédit total</span>
                    <span className="text-2xl">{formatPrice(totalCredit)}</span>
                </div>
            </div>
            <RecordsTable records={recordsData} />
        </div>
    )
}
