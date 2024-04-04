import { ComponentProps, ReactElement, cloneElement } from "react"
import { cn } from "../../services"


type FormatRecordContent = {
    icon: ReactElement
    disabled?: boolean
    textValue: string
    className?: ComponentProps<'div'>['className']
}

export function FormatRecordContent(props: FormatRecordContent) {
    return (
        <div
            aria-disabled={props.disabled}
            className={cn(
                "w-full max-w-fit grid grid-cols-[min-content_auto] items-center gap-1 overflow-hidden p-1.5 rounded-sm border-solid border bg-neutral/5 border-neutral/20",
                "aria-disabled:bg-transparent aria-disabled:border-neutral/10 aria-disabled:cursor-default",
                "group-focus:bg-neutral/10",
                "hover:bg-neutral/10"
            )}
        >
            {cloneElement(props.icon, { className: "stroke-neutral/50 stroke-1", size: 16 })}
            <span className="text-left h-fit text-sm leading-none text-neutral aria-disabled:text-neutral/50 overflow-hidden whitespace-pre text-ellipsis">{props.textValue}</span>
        </div>
    )
}
