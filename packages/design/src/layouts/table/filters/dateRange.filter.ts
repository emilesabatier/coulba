import { Row } from "@tanstack/react-table"
import { DateRange } from "../../../inputs"



export function dateRangeFilter<T>(row: Row<T>, columnId: string, value: DateRange | null) {
    if (!value) return true

    let rawValue = value

    let rowValue = String(row.original[columnId as keyof T])
    let currentDate = new Date(String(rowValue))
    if (!currentDate) return true

    let start = rawValue.start
    let end = rawValue.end

    if (!start && !end) return true

    if (start && !end) {
        let startDate = new Date(start)
        if (currentDate < startDate) return false
    }

    if (!start && end) {
        let endDate = new Date(end)
        if (currentDate > endDate) return false
    }

    if (start && end) {
        let startDate = new Date(start)
        let endDate = new Date(end)

        if (currentDate < startDate || currentDate > endDate) return false
    }

    return true
}
