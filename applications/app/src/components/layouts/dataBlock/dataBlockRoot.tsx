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
                "shrink-0 w-full h-fit grid grid-cols-[max-content_auto] gap-x-4 gap-y-2 p-4 bg-white border border-neutral/20 rounded-md",
                props.className
            )}
            children={props.children}
        />
    )
}
