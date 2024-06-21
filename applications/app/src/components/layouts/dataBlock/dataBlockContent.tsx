import { cn } from "@coulba/design/services"
import { ComponentProps, ReactElement } from "react"


type DataBlockContent = {
    children: null | ReactElement | (null | ReactElement)[]
    className?: ComponentProps<'div'>['className']
}

export function DataBlockContent(props: DataBlockContent) {
    return (
        <div
            className={cn(
                "shrink-0 w-full h-fit grid grid-cols-[max-content_auto] gap-x-6 gap-y-3 p-3",
                props.className
            )}
            children={props.children}
        />
    )
}
