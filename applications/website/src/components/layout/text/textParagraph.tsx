import { cn } from "@coulba/design/services"
import { ComponentProps, ReactElement } from "react"


type TextParagraph = {
    className?: ComponentProps<'p'>['className']
    children: ReactElement | string | (ReactElement | string)[]
}

export function TextParagraph(props: TextParagraph) {
    return (
        <p
            className={cn(
                "p-2",
                props.className
            )}
            children={props.children}
        />
    )
}
