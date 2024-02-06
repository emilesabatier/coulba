import { ComponentProps } from "react"
import { Chip } from "../../layouts"
import { FormatBase } from "../formatBase"


type FormatBoolean = {
    boolean?: boolean | null
    text?: string
    className?: ComponentProps<'div'>['className']
}

export function FormatBoolean(props: FormatBoolean) {
    return (
        <FormatBase className={props.className}>
            <Chip
                text={props.text ?? (!props.boolean ? "Non" : "Oui")}
                color={!props.boolean ? "error" : "success"}
            />
        </FormatBase>
    )
}
