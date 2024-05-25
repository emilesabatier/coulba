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
                "shrink-0 w-full h-fit grid grid-cols-1",
                props.className
            )}
            children={props.children}
        />
    )
}
