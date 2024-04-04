import { ComponentProps } from "react"
import { cn } from "../services/cn"


export type CardVariants = "default" | "neutral" | "information" | "error" | "warning" | "success"

export interface Card extends React.ComponentProps<'div'> {
    className?: ComponentProps<'div'>['className']
    variant?: CardVariants
}

export function Card(props: Card) {
    let cardVariants = {
        "default": "bg-white border-neutral/20",
        "neutral": "bg-neutral/5 border-neutral/20",
        "information": "bg-information/5 border-information/25",
        "error": "bg-error/5 border-error/25",
        "warning": "bg-warning/5 border-warning/25",
        "success": "bg-success/5 border-success/25"
    }

    return (
        <div
            className={cn("w-fit h-fit flex flex-row justify-start items-start p-4 border-solid border rounded-md", cardVariants[props?.variant ?? "default"], props.className)}
        >
            {props.children}
        </div >
    )
}
