import { MenuColors } from "@coulba/design/buttons"
import { cn } from "@coulba/design/services"
import { IconAlertHexagon, IconAlertTriangle, IconCircleCheck, IconInfoSquare } from "@tabler/icons-react"
import { ComponentProps, ReactElement } from "react"



type Banner = {
    text?: string | null
    variant?: MenuColors
    className?: ComponentProps<'div'>['className']
    children?: ReactElement | string | null | Array<ReactElement | string | null>
}

export function Banner(props: Banner) {

    const banners = {
        "neutral": {
            icon: null,
            bg: "bg-neutral/10",
            text: "text-neutral"
        },
        "information": {
            icon: <IconInfoSquare size={20} className="text-information" />,
            bg: "bg-information/5",
            text: "text-information"
        },
        "error": {
            icon: <IconAlertTriangle size={20} className="text-error" />,
            bg: "bg-error/5",
            text: "text-error"
        },
        "warning": {
            icon: <IconAlertHexagon size={20} className="text-warning" />,
            bg: "bg-warning/5",
            text: "text-warning"
        },
        "success": {
            icon: <IconCircleCheck size={20} className="text-success" />,
            bg: "bg-success/5",
            text: "text-success"
        }
    }

    return (
        <div
            className={cn(
                "w-full bg-success/5 p-3 flex justify-start items-center gap-1.5",
                banners[props?.variant ?? "neutral"].bg,
                props.className
            )}
        >

            <p className={cn(
                "",
                banners[props?.variant ?? "neutral"].text,
                props.className
            )}
            >
                {props.children}
            </p>
        </div>
    )
}
