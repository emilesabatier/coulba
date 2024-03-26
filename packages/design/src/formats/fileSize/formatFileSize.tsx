import { ComponentProps } from "react"
import { FormatBase } from "../formatBase"
import { FormatNull } from "../null/formatNull"
import { formatFileSize } from "./fileSize.format"


type FormatFileSize = {
    size?: number | null
    className?: ComponentProps<'div'>['className']
}

export function FormatFileSize(props: FormatFileSize) {
    if (props.size === undefined || props.size === null) return <FormatNull />
    return (
        <FormatBase className={props.className}>
            <span className="w-fit max-w-full overflow-hidden whitespace-nowrap text-ellipsis text-base break-words">
                {formatFileSize(props.size)}
            </span>
        </FormatBase>
    )
}
