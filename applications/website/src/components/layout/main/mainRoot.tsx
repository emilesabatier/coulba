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
                "w-full grow min-h-full h-fit flex flex-col justify-start items-stretch",
                props.className
            )}
            children={props.children}
        />
    )
}
