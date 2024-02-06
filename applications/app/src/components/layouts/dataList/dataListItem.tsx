import { cn } from "@monassosportive/design/services"
import { ComponentProps, ReactElement } from "react"


type DataListItem = {
    key: string
    children: ReactElement | ReactElement[]
    className?: ComponentProps<'div'>['className']
}

export function DataListItem(props: DataListItem) {
    return (
        <div
            key={props.key}
            className={cn(
                "w-full flex justify-between items-center gap-2 p-2",
                props.className
            )}
            children={props.children}
        />
    )
}
