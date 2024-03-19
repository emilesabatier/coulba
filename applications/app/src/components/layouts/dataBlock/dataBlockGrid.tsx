import { cn } from "@monassosportive/design/services"
import { ReactElement } from "react"



type DataBlockGrid = {
    children: ReactElement | ReactElement[]
}

export function DataBlockGrid(props: DataBlockGrid) {
    return (
        <div
            className={cn(
                "shrink-0 w-fit max-w-full min-h-fit h-fit flex flex-wrap justify-start items-start gap-2",
                // (Array.isArray(props.children) && props.children.length > 0) ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1 lg:grid-cols-1"
            )}
            children={props.children}
        />
    )
}
