import { cn } from "@coulba/design/services"
import { ComponentProps, ReactElement } from "react"


type DataBlockHeader = {
    children: null | ReactElement | (null | ReactElement)[]
    className?: ComponentProps<'div'>['className']
}

export function DataBlockHeader(props: DataBlockHeader) {
    return (
        <div
            className={cn(
                "shrink-0 w-full h-fit p-3 flex justify-start items-start gap-1.5 bg-neutral/5 rounded-md",
                props.className
            )}
            children={props.children}
        />
    )
}
