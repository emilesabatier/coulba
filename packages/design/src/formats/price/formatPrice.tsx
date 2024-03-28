import { ComponentProps } from "react"
import { cn } from "../../services"
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
            <span className={cn(
                "w-fit max-w-full overflow-hidden whitespace-nowrap text-ellipsis text-base break-words",
                Number(props.price) === 0 ? "text-neutral/25" : ""
            )}>
                {formatPrice(props.price)}
            </span>
        </FormatBase>
    )
}
