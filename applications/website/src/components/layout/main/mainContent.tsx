import { cn } from "@coulba/design/services"
import { ComponentProps, ReactElement } from "react"


type MainContent = {
    className?: ComponentProps<'div'>['className']
    children: ReactElement | ReactElement[]
}

export function MainContent(props: MainContent) {
    return (
        <div
            className={cn(
                "w-full min-h-full h-full max-h-full overflow-auto p-4 flex flex-col justify-start items-center",
                props.className
            )}
            children={props.children}
        />
    )
}
