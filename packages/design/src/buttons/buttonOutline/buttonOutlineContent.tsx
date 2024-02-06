import { cloneElement, ComponentProps, ReactElement } from "react"
import { CircularLoader } from "../../layouts"
import { cn } from "../../services/cn"


export type OutlineColors = "neutral" | "primary" | "error" | "warning" | "success" | "information"

export type ButtonOutlineContent = {
    loading?: boolean
    disabled?: boolean
    text?: string
    icon?: ReactElement
    color?: OutlineColors
    className?: ComponentProps<'div'>['className']
}

export function ButtonOutlineContent(props: ButtonOutlineContent) {
    let variants = {
        "neutral": {
            container: "border-neutral/25 hover:bg-neutral/5 group-focus:bg-neutral/5",
            loader: "fill-neutral",
            icon: "text-neutral",
            text: "text-neutral",
        },
        "primary": {
            container: "border-primary/100 hover:bg-primary/10 group-focus:bg-primary/10",
            loader: "fill-primary",
            icon: "text-primary",
            text: "text-primary",
        },
        "error": {
            container: "border-error/50 hover:bg-error/5 group-focus:bg-error/5",
            loader: "fill-error",
            icon: "text-error",
            text: "text-error",
        },
        "warning": {
            container: "border-warning/50 hover:bg-warning/5 group-focus:bg-warning/5",
            loader: "fill-warning",
            icon: "text-warning",
            text: "text-warning",
        },
        "success": {
            container: "border-success/50 hover:bg-success/5 group-focus:bg-success/5",
            loader: "fill-success",
            icon: "text-success",
            text: "text-success",
        },
        "information": {
            container: "border-information/50 hover:bg-information/5 group-focus:bg-information/5",
            loader: "fill-information",
            icon: "text-information",
            text: "text-information",
        },
    }
    return (
        <div
            aria-disabled={props.disabled || props.loading}
            className={cn(
                "overflow-hidden min-w-[42px] w-fit min-h-[40px] h-full max-h-[40px] flex justify-start items-center rounded-sm border",
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
            >
                {props.text}
            </span>
        </div>
    )
}
