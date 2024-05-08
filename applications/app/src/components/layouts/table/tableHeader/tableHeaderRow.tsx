import { cn } from "@coulba/design/services"
import { ComponentProps, ReactElement } from "react"


type TableHeaderRow = {
    children: ReactElement | ReactElement[]
    className?: ComponentProps<'tr'>['className']
}

export function TableHeaderRow(props: TableHeaderRow) {
    return (
        <tr
            className={cn(
                "w-full",
                props.className
            )}
            children={props.children}
        />
    )
}
