import { cn } from "@monassosportive/design/services"
import { ComponentProps, ReactNode } from "react"


type ContentRoot = {
    children: ReactNode
    className?: ComponentProps<'div'>['className']
}

export function ContentRoot(props: ContentRoot) {
    return (
        <div
            className={cn(
                "w-full min-h-fit flex flex-col justify-start items-stretch gap-1 md:gap-2 p-2 md:p-4",
                props.className
            )}
            children={props.children}
        />
    )
}
