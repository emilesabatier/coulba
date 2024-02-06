import { Column } from "@tanstack/react-table"
import { InputCombobox, Option } from "../../../inputs"


type FilterRecord<T> = {
    column?: Column<T, Option>
    placeholder?: string
    options?: Option[]
    format: (data: T) => string
}

export function FilterRecord<T>(props: FilterRecord<T>) {
    const columnFilterValue = props.column?.getFilterValue()
    return (
        <InputCombobox<T>
            options={props.options}
            value={(!columnFilterValue) ? undefined : String(columnFilterValue)}
            onChange={(value) => props.column?.setFilterValue(value)}
            placeholder={props.placeholder ?? "Sélectionner..."}
            format={props.format}
        />
    )
}
