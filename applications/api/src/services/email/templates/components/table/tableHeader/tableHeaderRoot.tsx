import { Style, css, cx } from "hono/css"
import { DOMAttributes } from "hono/jsx"


type TableHeaderRoot = {
    children: JSX.Element | JSX.Element[]
    class?: DOMAttributes["class"]
}

export function TableHeaderRoot(props: TableHeaderRoot) {
    return (
        <>
            <Style />
            <thead
                class={cx(
                    css`width: 100%;`,
                    props.class
                )}
                children={props.children}
            />
        </>
    )
}
