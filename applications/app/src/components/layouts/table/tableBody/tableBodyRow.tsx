import { cn } from "@coulba/design/services"
import { ComponentProps, ReactElement } from "react"


type TableBodyRow = {
    children: ReactElement | ReactElement[]
    className?: ComponentProps<'tr'>['className']
}

export function TableBodyRow(props: TableBodyRow) {
    return (
        <tr
            className={cn(
                "w-full border-b border-neutral/5 last:border-b-0",
                props.className
            )}
            children={props.children}
        />
    )
}
