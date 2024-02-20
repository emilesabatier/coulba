import { Popover, PopoverContent, PopoverTrigger } from "@coulba/design/overlays"
import { cn } from "@coulba/design/services"
import { IconChevronDown } from "@tabler/icons-react"
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
        <nav className={cn("min-w-fit w-full max-w-full h-fit", props.className)}>
            <ul className="min-w-fit max-w-full h-fit flex justify-start items-stretch gap-2 md:gap-4">
                {
                    menuItems.map((menuItem) => {
                        return (
                            <li
                                key={menuItem.key}
                                aria-current={current?.pathname.split("/").slice(0, 2).join("/") === menuItem.basePath}
                                className="relative flex justify-center items-center aria-current:after:-bottom-[2px] aria-current:after:absolute aria-current:after:border aria-current:after:border-neutral aria-current:after:z-[1] aria-current:after:content-[''] aria-current:after:w-full"
                            >
                                {
                                    !menuItem.subMenuItems ? (
                                        <Link
                                            to={menuItem.path}
                                            params={{}}
                                            className="flex justify-center items-center p-2 hover:bg-neutral/5 group"
                                        >
                                            <span className="text-neutral/75 text-lg group-hover:text-neutral group-aria-current:text-neutral">
                                                {menuItem.label}
                                            </span>
                                        </Link>
                                    ) : (
                                        <Popover>
                                            <PopoverTrigger className="group">
                                                <div className="flex justify-center items-center gap-1 p-2 hover:bg-neutral/5">
                                                    <span className="text-neutral/75 text-lg group-hover:text-neutral group-aria-current:text-neutral">
                                                        {menuItem.label}
                                                    </span>
                                                    <IconChevronDown size={16} className="stroke-neutral/75 group-hover:stroke-neutral group-aria-current:stroke-neutral" />
                                                </div>
                                            </PopoverTrigger>
                                            <PopoverContent
                                                align="center"
                                                side="bottom"
                                                className="bg-background border-2 border-neutral/25 border-t-transparent"
                                            >
                                                <ul className="flex flex-col justify-start items-stretch">
                                                    {
                                                        menuItem.subMenuItems.map((subMenuItem) => {

                                                            return (
                                                                <li
                                                                    key={subMenuItem.path}
                                                                    className="group"
                                                                >
                                                                    <Link
                                                                        to={subMenuItem.path}
                                                                        params={{}}
                                                                        className="flex justify-start items-center p-2 hover:bg-neutral/5"
                                                                    >
                                                                        <span className="text-neutral/75 text-lg group-hover:text-neutral group-aria-current:text-neutral text-left">
                                                                            {subMenuItem.label}
                                                                        </span>
                                                                    </Link>
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </PopoverContent>
                                        </Popover>
                                    )
                                }
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}
