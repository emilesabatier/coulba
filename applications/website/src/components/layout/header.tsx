import { ButtonOutline, ButtonOutlineContent, ButtonPlainContent } from "@coulba/design/buttons"
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
            <Link to="/tarif">
                <ButtonOutlineContent
                    text="Tarif"
                    className="justify-center"
                />
            </Link>
            <a href={import.meta.env.VITE_PUBLIC_APP_BASE} target="_blank" rel="noopener noreferrer" className="w-full md:w-fit">
                <ButtonPlainContent
                    text="Connexion"
                    className="justify-center"
                />
            </a>
        </Fragment>
    )
    return (
        <div className="w-full h-[64px] p-3 flex justify-center items-center border-b border-neutral/20 sticky top-0 bg-white">
            <nav className="relative w-full h-full max-w-[1280px] flex justify-between items-center gap-3">
                <div className="w-full h-full flex justify-start items-center gap-2">
                    <Link to="/" className="w-fit h-full flex justify-center items-center">
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
                                <div className="p-3 flex flex-col justify-start items-start">
                                    {menus}
                                </div>
                            </PopoverContent>
                        </Popover>
                    ) : (
                        <div className="flex justify-end items-center gap-1.5">
                            {menus}
                        </div>
                    )
                }
            </nav>
        </div>
    )
}
