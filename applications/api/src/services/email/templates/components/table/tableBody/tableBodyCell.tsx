import { Style, css, cx } from "hono/css"
import { DOMAttributes } from "hono/jsx"


type TableBodyCell = {
    children?: JSX.Element | null | JSX.Element[]
    class?: DOMAttributes["class"]
    style?: DOMAttributes["style"]
    align?: DOMAttributes["align"]
    colSpan?: DOMAttributes["colSpan"]

}

export function TableBodyCell(props: TableBodyCell) {
    return (
        <>
            <Style />
            <td
                class={cx(
                    css`width: fit-content; padding: 0.5rem; vertical-align: middle; border-bottom: 1px solid #DDDDDD;`,
                    props.class
                )}
                style={props.style}
                colSpan={props.colSpan}
                align={props.align ?? "left"}
                children={props.children}
            />
        </>
    )
}
