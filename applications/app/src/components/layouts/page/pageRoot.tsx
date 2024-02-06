import { cn } from "@monassosportive/design/services"
import { ComponentProps, ReactElement } from "react"


type PageRoot = {
    id: string
    children: ReactElement | ReactElement[]
    className?: ComponentProps<'div'>['className']
}

export function PageRoot(props: PageRoot) {
    return (
        <div
            id={props.id}
            className={cn(
                "relative z-[1] min-w-full w-full max-w-full min-h-full h-full max-h-full overflow-visible grid grid-cols-1 grid-rows-[max-content_auto] gap-2",
                props.className
            )}
            children={props.children}
        />
    )
}
