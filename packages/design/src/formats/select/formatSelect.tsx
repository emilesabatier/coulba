import { ComponentProps } from "react"
import { Option } from "../../inputs"
import { Chip } from "../../layouts"
import { ChipColors } from "../../layouts/chip"
import { FormatBase } from "../formatBase"
import { FormatNull } from "../null/formatNull"
import { formatSelect } from "./select.format"


type FormatSelect = {
    option?: string | null
    options: Option[]
    color?: ChipColors
    className?: ComponentProps<'div'>['className']
}

export function FormatSelect(props: FormatSelect) {
    let option = formatSelect(props.option, props.options)
    if (!option) return <FormatNull />
    return (
        <FormatBase className={props.className}>
            <Chip text={option} color={props.color} />
        </FormatBase>
    )
}
