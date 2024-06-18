import { cn } from "@coulba/design/services"
import { ComponentProps, ReactElement } from "react"


type SectionRoot = {
    children: null | ReactElement | (null | ReactElement)[]
    className?: ComponentProps<'div'>['className']
}

export function SectionRoot(props: SectionRoot) {
    return (
        <div
            className={cn(
                "shrink-0 w-full max-w-full h-fit max-h-full grid grid-cols-1 overflow-y-auto overflow-x-hidden",
                props.className
            )}
            children={props.children}
        />
    )
}
