import { ComponentProps } from "react"
import { cn } from "../services"


export type ChipColors = "neutral" | "error" | "warning" | "success" | "information" | "primary"

type Chip = {
    text?: string | null
    color?: ChipColors
    className?: ComponentProps<'div'>['className']
}

export function Chip(props: Chip) {

    let chipColors = {
        "neutral": {
            bg: "bg-neutral/10",
            text: "text-neutral"
        },
        "primary": {
            bg: "bg-neutral/10",
            text: "text-neutral"
        },
        "information": {
            bg: "bg-information/10",
            text: "text-information"
        },
        "error": {
            bg: "bg-error/10",
            text: "text-error"
        },
        "warning": {
            bg: "bg-warning/10",
            text: "text-warning"
        },
        "success": {
            bg: "bg-success/10",
            text: "text-success"
        }
    }

    if (!props.text) return null
    return (
        <div className={cn(
            "w-fit rounded-[4px] px-2 py-1 overflow-hidden flex flex-row justify-start items-center gap-1",
            chipColors[props?.color ?? "neutral"].bg,
            props.className
        )}>
            <span className={`overflow-hidden whitespace-nowrap text-ellipsis text-xs ${chipColors[props?.color ?? "neutral"].text}`}>{props.text}</span>
        </div>
    )
}
