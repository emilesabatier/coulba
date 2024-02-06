import { cn } from "@monassosportive/design/services"
import { ComponentProps, ReactElement } from "react"


type ContentHeader = {
    children?: ReactElement | ReactElement[]
    className?: ComponentProps<'div'>['className']
}

export function ContentHeader(props: ContentHeader) {
    return (
        <div
            className={cn(
                "w-full min-h-fit flex justify-start items-stretch overflow-hidden shrink-0",
                props.className
            )}
            children={props.children}
        />
    )
}
