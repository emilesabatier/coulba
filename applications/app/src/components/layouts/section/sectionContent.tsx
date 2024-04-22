import { ReactElement } from "react"


type SectionContent = {
    children: null | ReactElement | (null | ReactElement)[]
}

export function SectionContent(props: SectionContent) {
    return (
        <div className="flex flex-col justify-start items-stretch">
            {props.children}
        </div>
    )
}
