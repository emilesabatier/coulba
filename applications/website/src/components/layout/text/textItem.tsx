import { cn } from "@monassosportive/design/services"
import { ComponentProps, ReactElement } from "react"


type TextItem = {
    className?: ComponentProps<'li'>['className']
    children: ReactElement | string | (ReactElement | string)[]
}

export function TextItem(props: TextItem) {
    return (
        <li
            className={cn(
                "flex justify-start items-start gap-1",
                props.className
            )}
        >
            -
            {props.children}
        </li>
    )
}
