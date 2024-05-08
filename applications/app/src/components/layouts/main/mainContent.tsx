import { cn } from "@coulba/design/services"
import { ComponentProps, ReactNode } from "react"
import { MenuItem } from "../navigation/menuItems"


type MainContent = {
    children: ReactNode
    className?: ComponentProps<'div'>['className']
    menu?: MenuItem[]
}

export function MainContent(props: MainContent) {
    return (
        <div
            className={cn(
                "w-full max-w-full min-h-full h-full max-h-full overflow-y-auto overflow-x-visible flex flex-col justify-start items-stretch gap-8",
                props.className
            )}
        >
            {props.children}
        </div>
    )
}
