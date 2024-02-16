import { cn } from "@coulba/design/services"
import { Link, useRouter } from "@tanstack/react-router"
import { ComponentProps } from "react"
import { menuItems } from "./menuItems"


type Navigation = {
    onAfterClick?: () => void
    className?: ComponentProps<'div'>['className']
}

export function Navigation(props: Navigation) {
    const router = useRouter()
    const current = router.state.matches.at(-1)

    // function onMenuClick(onClick: () => void) {
    //     onClick()
    //     if (!props.onAfterClick) return
    //     props.onAfterClick()
    // }
    return (
        <div className={cn("min-w-fit w-full max-w-full h-fit", props.className)}>
            <ol className="min-w-fit max-w-full h-fit flex justify-start items-stretch gap-2 md:gap-4">
                {
                    menuItems.map((menuItem) => {
                        return (
                            <li
                                key={menuItem.menuPath}
                                aria-current={current?.pathname.split("/").slice(0, 2).join("/") === menuItem.menuPath.split("/").slice(0, 2).join("/")}
                                className="relative flex justify-center items-center group aria-current:after:-bottom-[2px] aria-current:after:absolute aria-current:after:border aria-current:after:border-neutral aria-current:after:z-[1] aria-current:after:content-[''] aria-current:after:w-full"
                            >
                                <Link
                                    to={menuItem.navigatePath}
                                    params={{}}
                                    className="flex justify-center items-center"
                                >
                                    <span className="p-2 hover:bg-neutral/5 text-neutral/50 text-lg group-hover:text-neutral group-aria-current:text-neutral">
                                        {menuItem.label}
                                    </span>
                                </Link>
                            </li>
                        )
                    })
                }
            </ol>
        </div>
    )
}
