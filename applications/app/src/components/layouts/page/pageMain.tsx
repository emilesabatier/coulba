import { cn } from "@monassosportive/design/services"
import { ComponentProps, ReactNode } from "react"


type PageMain = {
    children: ReactNode
    className?: ComponentProps<'main'>['className']
}

export function PageMain(props: PageMain) {
    return (
        <main
            className={cn(
                "w-full max-w-full min-h-full h-full max-h-full overflow-hidden grid grid-rows-[auto_max-content] md:grid-rows-1 grid-cols-1 md:grid-cols-[max-content_auto] gap-2",
                props.className
            )}
            children={props.children}
        />
    )
}
