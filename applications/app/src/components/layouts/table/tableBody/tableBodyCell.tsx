import { cn } from "@coulba/design/services"
import { ComponentProps, ReactElement } from "react"


type TableBodyCell = {
    children?: ReactElement | null | ReactElement[]
    className?: ComponentProps<'td'>['className']
    style?: ComponentProps<'td'>['style']
    align?: ComponentProps<'td'>['align']
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
            style={props.style}
            align={props.align ?? "left"}
            children={props.children}
        />
    )
}
