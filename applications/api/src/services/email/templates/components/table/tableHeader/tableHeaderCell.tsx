import { Style, css, cx } from "hono/css"
import { DOMAttributes } from "hono/jsx"


type TableHeaderCell = {
    children?: JSX.Element | JSX.Element[]
    class?: DOMAttributes["class"]
    align?: DOMAttributes["align"]
    colSpan?: DOMAttributes["colSpan"]
}

export function TableHeaderCell(props: TableHeaderCell) {
    return (
        <>
            <Style />
            <th
                class={cx(
                    css`width: 100%; padding: 0.5rem; vertical-align: middle; border-bottom: 1px solid #111111;`,
                    props.class
                )}
                colSpan={props.colSpan}
                align={props.align ?? "left"}
                children={props.children}
            />
        </>
    )
}
