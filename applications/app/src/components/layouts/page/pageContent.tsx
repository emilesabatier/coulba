import { cn } from "@monassosportive/design/services"
import { ComponentProps, ReactNode } from "react"


type PageContent = {
    children: ReactNode
    className?: ComponentProps<'div'>['className']
}

export function PageContent(props: PageContent) {
    return (
        <div
            className={cn(
                "relative z-[1] w-full min-h-fit max-h-full bg-white md:rounded-tl-md shadow-outer overflow-hidden",
                props.className
            )}
            children={props.children}
        />
    )
}
