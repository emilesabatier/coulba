import { cn } from "@coulba/design/services"
import { ComponentProps, ReactElement } from "react"


type MainRoot = {
    children: ReactElement | ReactElement[]
    className?: ComponentProps<'div'>['className']
}

export function MainRoot(props: MainRoot) {
    return (
        <div
            className={cn(
                "w-full min-h-full h-full max-h-full overflow-hidden grid grid-rows-[max-content_auto] md:p-4",
                props.className
            )}
            children={props.children}
        />
    )
}
