import { Row } from "@tanstack/react-table"
import { Option } from "../../../inputs"


export function selectFilter<T>(options: Option[]) {
    return (row: Row<T>, columnId: string, value: string) => {
        if (!value) return true

        let rawValue = value
        let rowValue = String(row.original[columnId as keyof T])

        let option = options.find(x => x.key === rowValue)
        if (!option) return false

        if (rawValue !== option?.key) return false

        return true
    }
}
