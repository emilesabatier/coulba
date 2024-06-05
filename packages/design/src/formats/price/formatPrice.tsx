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
        <FormatBase>
            <span className={cn(
                "w-fit max-w-full overflow-hidden whitespace-nowrap text-ellipsis text-base break-words",
                formatPrice(props.price) === "0.00" ? "text-neutral/25" : "",
                props.className
            )}>
                {formatPrice(props.price)}
            </span>
        </FormatBase>
    )
}
