import { cn } from "@coulba/design/services"
import { ComponentProps, ReactElement } from "react"


type MainRoot = {
    children: ReactElement | ReactElement[]
    className?: ComponentProps<'main'>['className']
}

export function MainRoot(props: MainRoot) {
    return (
        <main
            className={cn(
                "relative z-[1] min-w-full w-full max-w-full min-h-full h-fit flex flex-col justify-start items-stretch gap-2 md:gap-4 p-4 md:p-8",
                props.className
            )}
            children={props.children}
        />
    )
}
