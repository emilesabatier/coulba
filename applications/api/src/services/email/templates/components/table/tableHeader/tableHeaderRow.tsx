import { Style, css, cx } from "hono/css"
import { DOMAttributes } from "hono/jsx"


type TableHeaderRow = {
    children: JSX.Element | JSX.Element[]
    class?: DOMAttributes["class"]
}

export function TableHeaderRow(props: TableHeaderRow) {
    return (
        <>
            <Style />
            <tr
                style={cx(
                    css`width: 100%;`,
                    props.class
                )}
                children={props.children}
            />
        </>
    )
}
