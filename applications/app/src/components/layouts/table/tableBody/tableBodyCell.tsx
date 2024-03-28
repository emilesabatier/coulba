import { cn } from "@coulba/design/services"
import { ComponentProps, ReactElement } from "react"


type TableBodyCell = {
    children?: ReactElement | ReactElement[]
    className?: ComponentProps<'td'>['className']
    colSpan?: ComponentProps<'td'>['colSpan']
}

export function TableBodyCell(props: TableBodyCell) {
    return (
        <td
            className={cn(
                "w-fit p-2",
                props.className
            )}
            colSpan={props.colSpan}
            children={props.children}
        />
    )
}
