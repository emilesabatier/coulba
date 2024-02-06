import { Column } from "@tanstack/react-table"
import { DateRange, InputDateRange } from "../../../inputs"


type FilterDateRange<T> = { column?: Column<T, DateRange | null | undefined> }

export function FilterDateRange<T>(props: FilterDateRange<T>) {
    const columnFilterValue = props.column?.getFilterValue() as DateRange | null | undefined
    return (
        <InputDateRange
            value={columnFilterValue}
            onChange={(value) => props.column?.setFilterValue(value)}
        />
    )
}
