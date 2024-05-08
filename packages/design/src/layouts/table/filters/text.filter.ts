import { Row } from "@tanstack/react-table"
import { similarity } from "../../../services/similarity"


export function textFilter<T>(row: Row<T>, columnId: string, value: string | null | undefined) {
    if (!value) return true

    let rawValue = String(value).trim().toLowerCase()
    let rowValue = String(row.original[columnId as keyof T]).trim().toLowerCase()

    if (rowValue.includes(rawValue)) return true

    let normalizedDistance = similarity(rowValue, rawValue)
    if (normalizedDistance < 0.75) return false

    return true
}
