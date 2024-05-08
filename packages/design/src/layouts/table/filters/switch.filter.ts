import { Row } from "@tanstack/react-table"


export function switchFilter<T>(row: Row<T>, columnId: string, value: boolean) {
    if (value === undefined || value === null) return true

    let rawValue = value
    let rowValue = Boolean(row.original[columnId as keyof T])

    return (rawValue === rowValue)
}
