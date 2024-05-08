import { ReactElement } from "react"


type SectionRoot = {
    children: null | ReactElement | (null | ReactElement)[]
}

export function SectionRoot(props: SectionRoot) {
    return (
        <div
            className="shrink-0 w-full h-fit flex flex-col justify-start items-stretch gap-2"
            children={props.children}
        />
    )
}
