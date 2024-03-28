import { cn } from "@coulba/design/services"
import { ComponentProps, ReactElement } from "react"


type TableHeaderCell = {
    children?: ReactElement | ReactElement[]
    className?: ComponentProps<'th'>['className']
}

export function TableHeaderCell(props: TableHeaderCell) {
    return (
        <th
            className={cn(
                "w-fit p-2 align-middle text-start",
                props.className
            )}
            children={props.children}
        />
    )
}
