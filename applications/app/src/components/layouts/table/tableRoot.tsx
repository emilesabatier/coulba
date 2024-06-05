import { cn } from "@coulba/design/services"
import { ComponentProps, ReactElement } from "react"


type TableRoot = {
    children: ReactElement | ReactElement[]
    className?: ComponentProps<'table'>['className']
}

export function TableRoot(props: TableRoot) {
    return (
        <table
            className={cn(
                "w-full h-fit border-collapse",
                props.className
            )}
            children={props.children}
        />
    )
}
