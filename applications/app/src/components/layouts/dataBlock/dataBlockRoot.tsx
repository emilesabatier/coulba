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
                "shrink-0 w-full h-fit flex flex-col justify-start items-stretch",
                props.className
            )}
            children={props.children}
        />
    )
}
