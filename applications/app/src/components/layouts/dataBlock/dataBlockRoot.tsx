import { cn } from "@coulba/design/services"
import { ComponentProps, ReactElement } from "react"


type DataBlockRoot = {
    children: null | ReactElement | (null | ReactElement)[]
    className?: ComponentProps<'div'>['className']
}

export function DataBlockRoot(props: DataBlockRoot) {
    return (
        <div
            className={cn(
                "shrink-0 w-full h-fit grid grid-cols-[max-content_auto] gap-x-4 gap-y-2 p-1.5",
                props.className
            )}
            children={props.children}
        />
    )
}
