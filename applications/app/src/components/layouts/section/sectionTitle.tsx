import { ComponentProps } from "react"


type SectionTitle = {
    title: string
    className?: ComponentProps<'div'>['className']
}

export function SectionTitle(props: SectionTitle) {
    return (
        <span className="uppercase text-neutral/25">{props.title}</span>
    )
}
