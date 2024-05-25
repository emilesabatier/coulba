import { cn } from "@coulba/design/services"
import { ComponentProps, ReactElement } from "react"


type Main = {
    children: ReactElement | ReactElement[]
    className?: ComponentProps<'main'>['className']
}

export function Main(props: Main) {
    return (
        <main
            className={cn(
                "min-w-full w-full max-w-full min-h-full h-full overflow-auto",
                props.className
            )}
            children={props.children}
        />
    )
}
