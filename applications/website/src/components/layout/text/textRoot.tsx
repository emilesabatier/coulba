import { cn } from "@coulba/design/services"
import { ComponentProps, ReactElement } from "react"


type TextRoot = {
    className?: ComponentProps<'div'>['className']
    children: ReactElement | ReactElement[]
}

export function TextRoot(props: TextRoot) {
    return (
        <div
            className={cn(
                "flex flex-col justify-start items-start gap-3",
                props.className
            )}
            children={props.children}
        />
    )
}
