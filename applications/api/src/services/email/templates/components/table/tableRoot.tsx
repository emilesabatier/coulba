import { Style, css, cx } from "hono/css"
import { DOMAttributes } from "hono/jsx"


type TableRoot = {
    children: JSX.Element | JSX.Element[]
    class?: DOMAttributes["class"]
}

export function TableRoot(props: TableRoot) {
    return (
        <>
            <Style />
            <table
                class={cx(
                    css`width: 100%; height: fit-content; border-collapse: separate; border-spacing: 0; border: 1px solid #111111;`,
                    props.class
                )}
                children={props.children}
            />
        </>
    )
}
