import { ComponentProps } from "react"
import { FormatBase } from "../formatBase"
import { FormatNull } from "../null/formatNull"


type FormatColor = {
    color?: string | null
    className?: ComponentProps<'div'>['className']
}

export function FormatColor(props: FormatColor) {
    if (!props.color) return <FormatNull />
    return (
        <FormatBase className={props.className}>
            <div
                className="flex flex-row justify-start items-center gap-2 h-[24px] p-1 rounded-[4px] w-16"
                style={{
                    backgroundColor: (!props.color) ? undefined : props.color + "44"
                }}
            >
                {/* <span className="italic text-sm text-neutral/50">{props.color.toLocaleUpperCase()}</span> */}
                <div
                    className="rounded-[2px] w-full h-full"
                    style={{
                        backgroundColor: props.color
                    }}
                />
            </div>
        </FormatBase>
    )
}
