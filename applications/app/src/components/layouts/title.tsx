import { ComponentProps } from "react"


type Title = {
    title: string
    className?: ComponentProps<'div'>['className']
}

export function Title(props: Title) {
    return (
        <span className="uppercase text-neutral/50">{props.title}</span>
    )
}
