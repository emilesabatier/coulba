import { cn } from "@monassosportive/design/services"
import { ComponentProps, ReactElement } from "react"


type TextRoot = {
    className?: ComponentProps<'div'>['className']
    children: ReactElement | ReactElement[]
}

export function TextRoot(props: TextRoot) {
    return (
        <div
            className={cn(
                "max-w-md flex flex-col justify-start items-start gap-4 p-4",
                props.className
            )}
            children={props.children}
        />
    )
}
