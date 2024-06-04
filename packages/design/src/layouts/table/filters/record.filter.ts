import { Row } from "@tanstack/react-table"


export function rowFilter<T>(idrowKey: keyof T) {
    return (row: Row<T>, _columnId: string, value: string) => {
        if (!value) return true

        let rawValue = value

        let relatedrowId = row.original[idrowKey]
        if (!relatedrowId) return true

        if (rawValue !== relatedrowId) return false

        return true
    }
}
