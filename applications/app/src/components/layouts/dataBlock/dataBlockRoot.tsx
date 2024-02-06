import { ReactElement } from "react"


type DataBlockRoot = {
    key: string
    children: ReactElement | ReactElement[]
}

export function DataBlockRoot(props: DataBlockRoot) {
    return (
        <div
            id={props.key}
            key={props.key}
            className="w-full min-h-fit h-full flex flex-col justify-start items-stretch gap-2 bg-background/50 p-2 md:p-4 rounded-md overflow-hidden"
            children={props.children}
        />
    )
}
