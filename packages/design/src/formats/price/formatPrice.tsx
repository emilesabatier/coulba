import { ComponentProps } from "react"
import { FormatBase } from "../formatBase"
import { FormatNull } from "../null/formatNull"
import { formatPrice } from "./price.format"


type FormatPrice = {
    price?: number | null | string
    className?: ComponentProps<'div'>['className']
}

export function FormatPrice(props: FormatPrice) {
    if (props.price === undefined || props.price === null) return <FormatNull />
    return (
        <FormatBase className={props.className}>
            <span className="w-fit max-w-full overflow-hidden whitespace-nowrap text-ellipsis text-base break-words">
                {formatPrice(props.price)}
            </span>
        </FormatBase>
    )
}
