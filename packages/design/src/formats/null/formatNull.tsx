import { ComponentProps } from "react"
import { FormatBase } from "../formatBase"


type FormatNull = {
    text?: string
    className?: ComponentProps<'div'>['className']
}

export function FormatNull(props: FormatNull) {
    return (
        <FormatBase className={props.className}>
            <span className="inline-flex flex-row justify-start items-center italic text-neutral/25 whitespace-nowrap overflow-hidden text-ellipsis">{props.text ?? "/"}</span>
        </FormatBase>
    )
}
