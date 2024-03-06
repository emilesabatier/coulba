import { cn } from "@coulba/design/services"
import { ComponentProps, ReactElement } from "react"


type PageRoot = {
    children: ReactElement | ReactElement[]
    className?: ComponentProps<'div'>['className']
}

export function PageRoot(props: PageRoot) {
    return (
        <div
            className={cn(
                "relative z-[1] min-w-full w-full max-w-full min-h-full h-full max-h-full overflow-visible grid grid-cols-[max-content_auto] grid-rows-1",
                props.className
            )}
            children={props.children}
        />
    )
}
