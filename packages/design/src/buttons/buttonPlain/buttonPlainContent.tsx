import { cloneElement, ComponentProps, ReactElement } from "react"
import { CircularLoader } from "../../layouts"
import { cn } from "../../services/cn"


export type PlainColors = "neutral" | "error" | "warning" | "success" | "information"

export type ButtonPlainContent = {
    loading?: boolean
    disabled?: boolean
    text?: string
    icon?: ReactElement
    color?: PlainColors
    className?: ComponentProps<'div'>['className']
}

export function ButtonPlainContent(props: ButtonPlainContent) {
    let variants = {
        "neutral": {
            container: "border-neutral bg-neutral"
        },
        "error": {
            container: "border-error bg-error"
        },
        "warning": {
            container: "border-warning bg-warning"
        },
        "success": {
            container: "border-success bg-success"
        },
        "information": {
            container: "border-information bg-information"
        },
    }
    return (
        <div
            aria-disabled={props.disabled || props.loading}
            className={cn(
                "overflow-hidden min-w-[42px] w-fit min-h-[40px] h-full max-h-[40px] flex justify-start items-center py-2 rounded-sm border shadow-sm",
                "hover:brightness-90 group-focus:brightness-90 aria-disabled:opacity-30",
                !props.text ? "p-2.5 w-[42px]" : "w-fit p-2.5 gap-2",
                variants[props?.color ?? "neutral"].container,
                props.className
            )}
        >
            {
                (!props.loading) ? null : <CircularLoader className={cn(
                    "min-w-[1.25rem] w-5 min-h-[1.25rem] h-5",
                    "stroke-white",
                )} />
            }
            {
                (props.icon && !props.loading)
                    ?
                    cloneElement(props.icon, {
                        "aria-disabled": props.disabled,
                        size: 20,
                        className: cn(
                            "min-w-[20px] p-0.5 text-white"
                        ),
                        stroke: 2
                    })
                    : null
            }
            <span
                aria-disabled={props.disabled || props.loading}
                className="text-white text-base overflow-hidden whitespace-nowrap text-ellipsis"
            >
                {props.text}
            </span>
        </div>
    )
}
