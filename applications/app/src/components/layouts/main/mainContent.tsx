import { cn } from "@coulba/design/services"
import { ComponentProps, ReactNode } from "react"
import { MenuItem } from "../navigation/menuItems"
import { MainNavigation } from "./mainNavigation"


type MainContent = {
    children: ReactNode
    className?: ComponentProps<'main'>['className']
    menu?: MenuItem[]
}

export function MainContent(props: MainContent) {
    return (
        <main
            className={cn(
                "w-full max-w-full min-h-full h-full max-h-full overflow-auto",
                !props.menu ? "" : "grid grid-cols-[max-content_auto]",
                props.className
            )}
        >
            {
                !props.menu ? null : <MainNavigation menu={props.menu} />
            }
            <div className="p-4 md:p-8">
                {props.children}
            </div>
        </main>
    )
}
