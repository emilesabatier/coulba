import { Button } from "@monassosportive/design/buttons"
import { cn } from "@monassosportive/design/services"
import { cloneElement } from "react"
import { ApplicationRoute } from "../../../hooks/useApplications"


type NavigationButton = ApplicationRoute

export function NavigationButton(props: NavigationButton) {
    return (
        <Button
            aria-current={props.isActive}
            onClick={() => props.onClick()}
            className="w-full group"
        >
            <div
                className={cn(
                    "w-full overflow-hidden px-3 py-2 rounded-sm flex justify-start items-center gap-2",
                    "group-aria-current:bg-primary/5 grid grid-cols-[auto_min-content] overflow-hidden items-center gap-2",
                    "group-hover:bg-background/50"
                )}
            >
                {!props.icon ? null : cloneElement(props.icon, {
                    size: 16,
                    className: "group-aria-current:stroke-primary group-aria-current:stroke-2"
                })}
                <span className={cn(
                    "w-full text-left whitespace-nowrap overflow-hidden text-ellipsis",
                    "group-hover:underline",
                    "group-aria-current:text-primary"
                )}>
                    {props.title}
                </span>
            </div>
        </Button>
    )
}
