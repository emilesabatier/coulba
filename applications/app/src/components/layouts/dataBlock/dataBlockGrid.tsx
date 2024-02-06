import { ReactElement } from "react"



type DataBlockGrid = {
    id: string
    children: ReactElement | ReactElement[]
}

export function DataBlockGrid(props: DataBlockGrid) {
    return (
        <div
            id={props.id}
            className="shrink-0 w-full min-h-fit grid grid-cols-1 gap-2 lg:grid-cols-2"
            children={props.children}
        />
    )
}
