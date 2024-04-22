import { ReactElement } from "react"


type SectionHeader = {
    title: string
    children?: ReactElement
}

export function SectionHeader(props: SectionHeader) {
    return (
        <div className="flex justify-between items-stretch gap-2">
            <span className="text-neutral/75 text-xl">{props.title}</span>
            {props.children}
        </div>
    )
}
