import { Style, css, cx } from 'hono/css'
import { DOMAttributes } from "hono/jsx"


type TableBodyRow = {
    children: JSX.Element | JSX.Element[]
    class?: DOMAttributes["class"]
}

export function TableBodyRow(props: TableBodyRow) {
    return (
        <>
            <Style />
            <tr
                class={cx(
                    css`width: 100%;`,
                    props.class
                )}
                children={props.children}
            />
        </>
    )
}
