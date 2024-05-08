import { ComponentProps } from "react"
import { cn } from "../../services"
import { FormatBase } from "../formatBase"
import { FormatNull } from "../null/formatNull"


type FormatText = {
    text?: string | null
    wrap?: boolean
    className?: ComponentProps<'span'>['className']
}

export function FormatText(props: FormatText) {
    if (!props.text) return <FormatNull />
    return (
        <FormatBase className={props.className}>
            <span className={cn(
                "text-base break-words overflow-x-hidden text-ellipsis",
                !props.wrap ? "whitespace-nowrap" : undefined,
                props.className
            )}>
                {props.text}
            </span>
        </FormatBase>
    )
}
