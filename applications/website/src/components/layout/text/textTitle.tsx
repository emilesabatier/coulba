import { cn } from "@coulba/design/services"
import { ComponentProps, ReactElement } from "react"


type TextTitle = {
    className?: ComponentProps<'h2'>['className']
    children: string | ReactElement | ReactElement[]
}

export function TextTitle(props: TextTitle) {
    return (
        <h2
            className={cn(
                "text-2xl uppercase text-neutral/30",
                props.className
            )}
            children={props.children}
        />
    )
}
