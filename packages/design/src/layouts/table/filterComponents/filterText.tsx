import { Column } from "@tanstack/react-table"
import { InputDebounced, InputText } from "../../../inputs"


type FilterText<T> = { column?: Column<T, string> }

export function FilterText<T>(props: FilterText<T>) {
    const columnFilterValue = props.column?.getFilterValue()
    return (
        <InputDebounced
            value={(!columnFilterValue) ? "" : String(columnFilterValue)}
            onChange={value => props.column?.setFilterValue(value)}
        >
            <InputText placeholder="Contient..." />
        </InputDebounced>
    )
}
