import { cn } from "@monassosportive/design/services"
import { ComponentProps, ReactElement } from "react"


type MainRoot = {
    children: ReactElement | ReactElement[]
    className?: ComponentProps<'div'>['className']
}

export function MainRoot(props: MainRoot) {
    return (
        <div className={cn(
            "w-full min-h-fit h-full max-h-full overflow-hidden grid grid-cols-1 grid-rows-[auto_max-content] md:grid-rows-[max-content_auto]",
            props.className
        )}>
            {props.children}
        </div>
    )
}
