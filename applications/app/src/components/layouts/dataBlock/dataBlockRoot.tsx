import { ReactElement } from "react"


type DataBlockRoot = {
    children: null | ReactElement | (null | ReactElement)[]
}

export function DataBlockRoot(props: DataBlockRoot) {
    return (
        <div
            className="shrink-0 w-full h-fit gap-2 md:gap-4 grid grid-cols-1 md:grid-cols-3 p-2 md:p-4 bg-white border border-neutral/10 rounded-sm"
            children={props.children}
        />
    )
}
