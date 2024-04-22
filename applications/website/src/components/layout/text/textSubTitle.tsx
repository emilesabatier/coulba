import { cn } from "@coulba/design/services"
import { ComponentProps, ReactElement } from "react"


type TextSubTitle = {
    className?: ComponentProps<'h3'>['className']
    children: ReactElement | string | ReactElement[]
}

export function TextSubTitle(props: TextSubTitle) {
    return (
        <h3
            className={cn(
                "text-lg uppercase text-neutral/30",
                props.className
            )}
            children={props.children}
        />
    )
}
