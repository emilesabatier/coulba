import { Column } from "@tanstack/react-table"
import { InputCombobox, Option } from "../../../inputs"


type Filtertransaction<T> = {
    column?: Column<T, Option>
    placeholder?: string
    options: Option[]
    format: (data: T) => string
}

export function Filtertransaction<T>(props: Filtertransaction<T>) {
    const columnFilterValue = props.column?.getFilterValue()
    return (
        <InputCombobox
            options={props.options}
            value={(!columnFilterValue) ? undefined : String(columnFilterValue)}
            onChange={(value) => props.column?.setFilterValue(value)}
            placeholder={props.placeholder ?? "Sélectionner..."}
        />
    )
}
