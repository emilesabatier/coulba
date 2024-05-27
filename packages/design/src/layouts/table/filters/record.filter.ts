import { Row } from "@tanstack/react-table"


export function recordFilter<T>(idrecordKey: keyof T) {
    return (row: Row<T>, _columnId: string, value: string) => {
        if (!value) return true

        let rawValue = value

        let relatedrecordId = row.original[idrecordKey]
        if (!relatedrecordId) return true

        if (rawValue !== relatedrecordId) return false

        return true
    }
}
