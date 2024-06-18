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
                "w-full max-w-full h-fit max-h-full flex justify-start items-start gap-1.5 p-3 border-b border-neutral/10 overflow-y-auto overflow-x-auto",
                props.className
            )}
            children={props.children}
        />
    )
}
