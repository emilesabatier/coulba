import { cn } from "@monassosportive/design/services"
import { ComponentProps, ReactElement } from "react"


type MainContent = {
    className?: ComponentProps<'div'>['className']
    children: ReactElement | ReactElement[]
}

export function MainContent(props: MainContent) {
    return (
        <div className={cn(
            "shrink-0 w-full min-h-fit h-full max-h-full overflow-auto",
            props.className
        )}>
            {props.children}
        </div>
    )
}
