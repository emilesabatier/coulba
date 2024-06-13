import { Style, css, cx } from "hono/css"
import { DOMAttributes } from "hono/jsx"


type TableBodyRoot = {
    children?: JSX.Element | JSX.Element[]
    class?: DOMAttributes["class"]
}

export function TableBodyRoot(props: TableBodyRoot) {
    return (
        <>
            <Style />
            <tbody
                class={cx(
                    css`width: 100%;`,
                    props.class
                )}
                children={props.children}
            />
        </>
    )
}
