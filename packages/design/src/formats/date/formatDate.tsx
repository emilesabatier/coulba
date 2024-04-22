import { ComponentProps } from "react"
import { FormatBase } from "../formatBase"
import { FormatNull } from "../null/formatNull"
import { formatDate } from "./date.format"


type FormatDate = {
    isoDate?: string | null
    className?: ComponentProps<'div'>['className']
}

export function FormatDate(props: FormatDate) {
    if (!props.isoDate) return <FormatNull />
    if (String(new Date(props.isoDate)) === "Invalid Date") return <FormatNull />
    return (
        <FormatBase className={props.className}>
            <span className="inline-flex flex-row justify-start items-center">
                {formatDate(props.isoDate)}
            </span>
        </FormatBase>
    )
}
