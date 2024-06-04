import { Column } from "@tanstack/react-table"
import { InputCombobox, Option } from "../../../inputs"


type Filterrow<T> = {
    column?: Column<T, Option>
    placeholder?: string
    options: Option[]
    format: (data: T) => string
}

export function Filterrow<T>(props: Filterrow<T>) {
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
