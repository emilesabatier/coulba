import { ButtonOutline, ButtonOutlineContent } from "@coulba/design/buttons"
import { useDeviceDetect } from "@coulba/design/hooks"
import { Logo } from "@coulba/design/layouts"
import { Popover, PopoverContent, PopoverTrigger } from "@coulba/design/overlays"
import { IconMenu } from "@tabler/icons-react"
import { Link } from "@tanstack/react-router"
import { Fragment } from "react"


export function Header() {
    const { isMobile } = useDeviceDetect()

    const menus = (
        <Fragment>
            {/* <a href={import.meta.env.VITE_PUBLIC_DOCUMENTATION_BASE} target="_blank" rel="noopener noreferrer" className="w-full md:w-fit">
                    <ButtonGhostContent
                        icon={<IconExternalLink />}
                        text="Documentation"
                        className="w-full md:w-fit justify-end"
                    />
                </a> */}
            <a href={import.meta.env.VITE_PUBLIC_APP_BASE} target="_blank" rel="noopener noreferrer" className="w-full md:w-fit">
                <ButtonOutlineContent
                    text="Connexion"
                    className="w-full md:w-fit justify-center"
                />
            </a>
        </Fragment>
    )
    return (
        <div className="w-full p-4 flex justify-center items-center">
            <nav className="w-full max-w-[1280px] flex justify-between items-center gap-4 overflow-hidden">
                <div className="relative w-fit flex justify-start items-center gap-2">
                    <Link to="/" className="w-fit flex justify-center items-center">
                        <Logo />
                    </Link>
                </div>
                {
                    isMobile ? (
                        <Popover>
                            <PopoverTrigger asChild >
                                <ButtonOutline
                                    icon={<IconMenu />}
                                />
                            </PopoverTrigger>
                            <PopoverContent align="end">
                                <div className="p-4 flex flex-col justify-start items-start">
                                    {menus}
                                </div>
                            </PopoverContent>
                        </Popover>
                    ) : (
                        <div className="flex justify-end items-center gap-1">
                            {menus}
                        </div>
                    )
                }
            </nav>
        </div>
    )
}
