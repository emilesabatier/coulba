import { cn } from "@coulba/design/services"
import { ComponentProps, ReactElement } from "react"


type TableBodyRoot = {
    children?: ReactElement | ReactElement[]
    className?: ComponentProps<'tbody'>['className']
}

export function TableBodyRoot(props: TableBodyRoot) {
    return (
        <tbody
            className={cn(
                "w-full",
                props.className
            )}
            children={props.children}
        />
    )
}
