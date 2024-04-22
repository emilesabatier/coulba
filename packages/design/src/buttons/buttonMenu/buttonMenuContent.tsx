import { cloneElement, ComponentProps, ReactElement } from "react"
import { CircularLoader } from "../../layouts"
import { cn } from "../../services/cn"


export type MenuColors = "neutral" | "error" | "warning" | "success" | "information"

export type ButtonMenuContent = {
    loading?: boolean
    disabled?: boolean
    text: string
    icon?: ReactElement
    color?: MenuColors
    className?: ComponentProps<'div'>['className']
}

export function ButtonMenuContent(props: ButtonMenuContent) {
    let variants = {
        "neutral": {
            container: "hover:bg-neutral/5 group-focus:bg-neutral/5",
            loader: "fill-neutral",
            icon: "text-neutral",
            text: "text-neutral/75 group-hover:text-neutral"
        },
        "error": {
            container: "hover:bg-error/5 group-focus:bg-error/5",
            loader: "fill-error",
            icon: "text-error",
            text: "text-error/75 group-hover:text-error"
        },
        "warning": {
            container: "hover:bg-warning/5 group-focus:bg-warning/5",
            loader: "fill-warning",
            icon: "text-warning",
            text: "text-warning/75 group-hover:text-warning"
        },
        "success": {
            container: "hover:bg-success/5 group-focus:bg-success/5",
            loader: "fill-success",
            icon: "text-success",
            text: "text-success/75 group-hover:text-success"
        },
        "information": {
            container: "hover:bg-information/5 group-focus:bg-information/5",
            loader: "fill-information",
            icon: "text-information",
            text: "text-information/75 group-hover:text-information"
        }
    }
    return (
        <div
            aria-disabled={props.disabled || props.loading}
            className={cn(
                "rounded-sm overflow-hidden w-full min-h-[40px] h-full max-h-[40px] flex justify-start items-center gap-2 p-2 border border-transparent",
                "aria-disabled:opacity-30 group",
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
                        size: 16,
                        className: cn(
                            "shrink-0",
                            variants[props?.color ?? "neutral"].icon
                        ),
                        strokeWidth: 2
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
