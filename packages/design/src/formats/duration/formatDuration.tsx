import { ComponentProps } from "react"
import { FormatBase } from "../formatBase"
import { FormatNull } from "../null/formatNull"
import { formatDuration } from "./duration.format"


type FormatDuration = {
    duration?: number | null
    className?: ComponentProps<'div'>['className']
}

export function FormatDuration(props: FormatDuration) {
    if (!props.duration) return <FormatNull />

    const formattedDuration = formatDuration(props.duration)

    return (
        <FormatBase className={props.className}>
            <div className="flex justify-start items-center">
                <span className="">{formattedDuration}</span>
            </div>
        </FormatBase>
    )
}
