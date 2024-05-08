import { cn } from "@coulba/design/services"
import { ComponentProps, ReactElement } from "react"


type TextList = {
    className?: ComponentProps<'ol'>['className']
    children: ReactElement | ReactElement[]
}

export function TextList(props: TextList) {
    return (
        <ol
            className={cn(
                "",
                props.className
            )}
            children={props.children}
        />
    )
}
