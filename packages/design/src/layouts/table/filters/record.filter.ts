import { Row } from "@tanstack/react-table"


export function transactionFilter<T>(idtransactionKey: keyof T) {
    return (row: Row<T>, _columnId: string, value: string) => {
        if (!value) return true

        let rawValue = value

        let relatedtransactionId = row.original[idtransactionKey]
        if (!relatedtransactionId) return true

        if (rawValue !== relatedtransactionId) return false

        return true
    }
}
