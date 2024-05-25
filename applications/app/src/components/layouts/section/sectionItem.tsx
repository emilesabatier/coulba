import { cn } from "@coulba/design/services"
import { ComponentProps, ReactElement } from "react"


type SectionItem = {
    children: null | ReactElement | (null | ReactElement)[]
    className?: ComponentProps<'div'>['className']
}

export function SectionItem(props: SectionItem) {
    return (
        <div
            className={cn(
                "h-fit flex justify-between items-center gap-1.5 p-3 border-b border-neutral/10",
                props.className
            )}
            children={props.children}
        />
    )
}
