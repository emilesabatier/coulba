import { Column } from "@tanstack/react-table"
import { InputSwitch } from "../../../inputs"


type FilterSwitch<T> = { column?: Column<T, boolean> }

export function FilterSwitch<T>(props: FilterSwitch<T>) {
    const columnFilterValue = props.column?.getFilterValue()
    return (
        <InputSwitch
            value={(!columnFilterValue) ? false : Boolean(columnFilterValue)}
            onChange={(value) => props.column?.setFilterValue(value)}
        />
    )
}
