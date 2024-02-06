import { ReactElement } from "react"


type Header = {
    children: ReactElement
}

export function Header(props: Header) {
    return (
        <div className="h-auto w-full rounded-b-md bg-white shadow-outer p-4 flex justify-start items-stretch overflow-hidden">
            {props.children}
        </div>
    )
}
