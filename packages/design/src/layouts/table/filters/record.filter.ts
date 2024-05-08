import { Row } from "@tanstack/react-table"


export function recordFilter<T>(idRecordKey: keyof T) {
    return (row: Row<T>, _columnId: string, value: string) => {
        if (!value) return true

        let rawValue = value

        let relatedRecordId = row.original[idRecordKey]
        if (!relatedRecordId) return true

        if (rawValue !== relatedRecordId) return false

        return true
    }
}
