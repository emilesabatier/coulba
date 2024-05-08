import { Column } from "@tanstack/react-table"
import { InputSelect, Option } from "../../../inputs"


type SelectFilter<T> = {
    column?: Column<T, Option>
    placeholder?: string
    options: Option[]
}

export function FilterSelect<T>(props: SelectFilter<T>) {
    const columnFilterValue = props.column?.getFilterValue()

    return (
        <InputSelect
            options={props.options}
            value={(!columnFilterValue) ? "" : String(columnFilterValue)}
            onChange={(value) => props.column?.setFilterValue(value)}
            placeholder={props.placeholder ?? "Sélectionner..."}
            allowEmpty
        />
    )
}
