import { cn } from "@coulba/design/services"
import { Link, useRouter } from "@tanstack/react-router"
import { ComponentProps } from "react"
import { MenuItem } from "../navigation/menuItems"


type MainNavigation = {
    menu: MenuItem[]
    className?: ComponentProps<'div'>['className']
}

export function MainNavigation(props: MainNavigation) {
    const router = useRouter()
    const current = router.state.matches.at(-1)

    return (
        <div
            className={cn(
                "w-full max-w-full min-h-full h-full max-h-full overflow-hidden p-4 md:p-8",
                props.className
            )}
        >
            <ol className="flex flex-col justify-start items-stretch gap-1 md:gap-2">
                {
                    props.menu.map((menuItem) => {
                        console.log(current?.pathname, menuItem.menuPath)
                        return (
                            <li
                                key={menuItem.menuPath}
                                aria-current={current?.pathname === menuItem.menuPath}
                                className="w-full flex justify-center items-center group border-l-2 border-transparent aria-current:border-neutral"
                            >
                                <Link
                                    to={menuItem.navigatePath}
                                    params={{}}
                                    className="w-full flex justify-start items-center"
                                >
                                    <span className="w-full p-2 hover:bg-neutral/5 text-neutral/50 text-lg group-hover:text-neutral group-aria-current:text-neutral">
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
