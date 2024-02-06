import { cloneElement, ComponentProps, ReactElement } from "react"
import { CircularLoader } from "../../layouts"
import { cn } from "../../services/cn"


export type SubtleColors = "neutral" | "primary" | "error" | "warning" | "success" | "information"

export type ButtonSubtleContent = {
    loading?: boolean
    disabled?: boolean
    text?: string
    icon?: ReactElement
    color?: SubtleColors
    className?: ComponentProps<'div'>['className']
}

export function ButtonSubtleContent(props: ButtonSubtleContent) {
    let variants = {
        "neutral": {
            container: "bg-neutral/5 hover:bg-neutral/10 group-focus:bg-neutral/10",
            loader: "stroke-neutral group-hover:fill-neutral",
            icon: "stroke-neutral group-hover:text-neutral",
            text: "text-neutral group-hover:text-neutral"
        },
        "primary": {
            container: "bg-primary/10 hover:bg-primary/10 group-focus:bg-primary/10",
            loader: "stroke-primary group-hover:fill-primary",
            icon: "stroke-primary group-hover:text-primary",
            text: "text-primary group-hover:text-primary"
        },
        "error": {
            container: "bg-error/5 hover:bg-error/10 group-focus:bg-error/10",
            loader: "stroke-error group-hover:fill-error",
            icon: "stroke-error group-hover:text-error",
            text: "text-error group-hover:text-error"
        },
        "warning": {
            container: "bg-warning/5 hover:bg-warning/10 group-focus:bg-warning/10",
            loader: "stroke-warning group-hover:fill-warning",
            icon: "stroke-warning group-hover:text-warning",
            text: "text-warning group-hover:text-warning"
        },
        "success": {
            container: "bg-success/5 hover:bg-success/10 group-focus:bg-success/10",
            loader: "stroke-success group-hover:fill-success",
            icon: "stroke-success group-hover:text-success",
            text: "text-success group-hover:text-success"
        },
        "information": {
            container: "bg-information/5 hover:bg-information/10 group-focus:bg-information/10",
            loader: "stroke-information group-hover:fill-information",
            icon: "stroke-information group-hover:text-information",
            text: "text-information group-hover:text-information"
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
                    variants[props?.color ?? "neutral"].loader,
                )} />
            }
            {
                (props.icon && !props.loading)
                    ?
                    cloneElement(props.icon, {
                        "aria-disabled": props.disabled,
                        size: 20,
                        className: cn(
                            "min-w-[20px]",
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
