import { cn } from "@coulba/design/services"
import { ComponentProps, ReactElement } from "react"


type PageContent = {
    children: ReactElement
    className?: ComponentProps<'div'>['className']
}

export function PageContent(props: PageContent) {
    return (
        <div
            className={cn(
                "w-full max-w-full min-h-full h-full max-h-full overflow-hidden",
                props.className
            )}
            children={props.children}
        />
    )
}
