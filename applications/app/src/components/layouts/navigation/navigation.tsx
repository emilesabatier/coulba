import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@coulba/design/layouts"
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

    const currentOpenMenu = menuItems.find((menuItem) => current?.pathname.split("/").slice(0, 2).join("/") === menuItem.basePath)
    return (
        <nav className={cn("min-w-[256px] w-full max-w-full h-fit", props.className)}>
            <Accordion
                type="single"
                collapsible
                className="min-w-[var(--radix-accordion-content-width)] w-full flex flex-col justify-start items-stretch gap-1"
                defaultValue={currentOpenMenu?.key}
            >
                {
                    menuItems.map((menuItem) => {
                        if (!menuItem.subMenuItems) return (
                            <Link
                                key={menuItem.key}
                                to={menuItem.path}
                                params={{}}
                                className="w-full"
                            >
                                <div
                                    aria-current={current?.pathname.split("/").slice(0, 2).join("/") === menuItem.basePath}
                                    className="group w-full flex justify-start items-center p-3 hover:bg-neutral/5 aria-current:bg-neutral/5 rounded-sm"
                                >
                                    <span className="w-full text-left text-neutral/75 leading-none group-hover:text-neutral">
                                        {menuItem.label}
                                    </span>
                                </div>
                            </Link>
                        )
                        return (
                            <AccordionItem
                                key={menuItem.key}
                                value={menuItem.key}
                                className="min-w-fit w-full"
                            >
                                <AccordionTrigger className="w-full" style={{ minWidth: "var(--radix-accordion-content-width)" }}>
                                    <div
                                        aria-current={current?.pathname.split("/").slice(0, 2).join("/") === menuItem.basePath}
                                        className="group w-full flex justify-between items-center p-3 hover:bg-neutral/5 aria-current:bg-neutral/5 rounded-sm"
                                    >
                                        <span className="w-full text-left text-neutral/75 leading-none group-hover:text-neutral group-aria-current:text-neutral">
                                            {menuItem.label}
                                        </span>
                                        <IconChevronDown size={16} className="stroke-neutral/75 group-hover:stroke-neutral group-aria-current:stroke-neutral" />
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="pl-4">
                                    <ul className="w-full flex flex-col justify-start items-stretch border-l border-neutral/20 pl-2 py-2 gap-0.5 md:gap-1">
                                        {
                                            menuItem.subMenuItems.map((subMenuItem) => {
                                                return (
                                                    <li
                                                        key={subMenuItem.path}
                                                        className="group w-full"
                                                    >
                                                        <Link
                                                            to={subMenuItem.path}
                                                            params={{}}
                                                            className="w-full"
                                                        >
                                                            <div
                                                                aria-current={current?.pathname.split("/").slice(0, 3).join("/") === subMenuItem.basePath}
                                                                className="group w-full flex justify-start items-center p-3 rounded-sm hover:bg-neutral/5 aria-current:bg-neutral/5"
                                                            >
                                                                <span className="w-full text-left text-neutral/75 leading-none group-hover:text-neutral group-aria-current:text-neutral">
                                                                    {subMenuItem.label}
                                                                </span>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        )
                    })
                }
            </Accordion>
        </nav>
    )
}
