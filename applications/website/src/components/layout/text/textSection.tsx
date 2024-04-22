import { cn } from "@coulba/design/services"
import { ComponentProps, ReactElement } from "react"


type TextSection = {
    className?: ComponentProps<'div'>['className']
    children: ReactElement | ReactElement[]
}

export function TextSection(props: TextSection) {
    return (
        <div
            className={cn(
                "flex flex-col justify-start items-start gap-2",
                props.className
            )}
            children={props.children}
        />
    )
}
