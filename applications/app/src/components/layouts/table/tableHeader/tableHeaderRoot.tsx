import { cn } from "@coulba/design/services"
import { ComponentProps, ReactElement } from "react"


type TableHeaderRoot = {
    children: ReactElement | ReactElement[]
    className?: ComponentProps<'thead'>['className']
}

export function TableHeaderRoot(props: TableHeaderRoot) {
    return (
        <thead
            className={cn(
                "w-full border-b border-neutral/10",
                props.className
            )}
            children={props.children}
        />
    )
}
