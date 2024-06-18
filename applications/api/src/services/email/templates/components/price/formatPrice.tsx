import { css, cx } from "hono/css"
import { DOMAttributes } from "hono/jsx"
import { formatPrice } from "./price.format.js"



type FormatPrice = {
    price?: number | null | string
    class?: DOMAttributes["class"]
}

export function FormatPrice(props: FormatPrice) {
    return (
        <span
            class={cx(
                css`width: fit-content; max-width: 100%; white-space: nowrap;`,
                formatPrice(props.price) === "0.00" ? css`color: #888888;` : undefined,
                props.class
            )}
        >
            {Number(props.price) < 0 ? `(${formatPrice(Math.abs(Number(props.price)))})` : formatPrice(props.price)}
        </span>
    )
}
