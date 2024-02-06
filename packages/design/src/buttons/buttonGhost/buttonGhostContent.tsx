import { cloneElement, ComponentProps, ReactElement } from "react"
import { CircularLoader } from "../../layouts"
import { cn } from "../../services/cn"


export type GhostColors = "neutral" | "primary" | "error" | "warning" | "success" | "information"

export type ButtonGhostContent = {
    loading?: boolean
    disabled?: boolean
    text?: string
    icon?: ReactElement
    color?: GhostColors
    className?: ComponentProps<'div'>['className']
}

export function ButtonGhostContent(props: ButtonGhostContent) {
    let variants = {
        "neutral": {
            container: "hover:bg-neutral/5 group-focus:bg-neutral/5",
            loader: "stroke-neutral",
            icon: "stroke-neutral",
            text: "text-neutral"
        },
        "primary": {
            container: "hover:bg-primary/10 hover:bg-primary/10",
            loader: "stroke-primary",
            icon: "stroke-primary",
            text: "text-primary"
        },
        "error": {
            container: "hover:bg-error/5 group-focus:bg-error/5",
            loader: "stroke-error",
            icon: "stroke-error",
            text: "text-error"
        },
        "warning": {
            container: "hover:bg-warning/5 hover:bg-warning/5",
            loader: "stroke-warning",
            icon: "stroke-warning",
            text: "text-warning"
        },
        "success": {
            container: "hover:bg-success/5 hover:bg-success/5",
            loader: "stroke-success",
            icon: "stroke-success",
            text: "text-success"
        },
        "information": {
            container: "hover:bg-information/5 hover:bg-information/5",
            loader: "stroke-information",
            icon: "stroke-information",
            text: "text-information"
        }
    }
    return (
        <div
            aria-disabled={props.disabled || props.loading}
            className={cn(
                "overflow-hidden min-w-[42px] w-fit min-h-[40px] h-full max-h-[40px] flex justify-start items-center rounded-sm border border-transparent",
                "aria-disabled:opacity-30",
                !props.text ? "p-2.5 w-[42px]" : "w-fit p-2.5 gap-2",
                variants[props?.color ?? "neutral"].container,
                props.className
            )}
        >
            {
                (!props.loading) ? null : <CircularLoader className={cn(
                    "min-w-[1.25rem] w-5 min-h-[1.25rem] h-5",
                    variants[props?.color ?? "neutral"].loader
                )} />
            }
            {
                (props.icon && !props.loading)
                    ?
                    cloneElement(props.icon, {
                        "aria-disabled": props.disabled,
                        size: 20,
                        className: cn(
                            "min-w-[20px] p-0.5",
                            variants[props?.color ?? "neutral"].icon
                        ),
                        strokeWidth: 1
                    })
                    : null
            }
            <span
                aria-disabled={props.disabled || props.loading}
                className={cn(
                    "text-base overflow-hidden whitespace-nowrap text-ellipsis",
                    variants[props?.color ?? "neutral"].text
                )}
            >{props.text}</span>
        </div >
    )
}
