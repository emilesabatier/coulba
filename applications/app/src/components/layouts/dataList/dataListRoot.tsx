import { ReactElement } from "react"


type DataListRoot = {
    id: string
    children: ReactElement | ReactElement[]
}

export function DataListRoot(props: DataListRoot) {
    return (
        <div
            id={props.id}
            className="h-full max-h-full flex flex-col justify-start items-stretch gap-2 bg-background/50 rounded-md p-2 md:p-4 overflow-hidden"
        >
            {props.children}
        </div>
    )
}
