import { ButtonGhostContent, ButtonOutline, ButtonPlainContent } from "@coulba/design/buttons"
import { useDeviceDetect } from "@coulba/design/hooks"
import { Logo } from "@coulba/design/layouts"
import { Popover, PopoverContent, PopoverTrigger } from "@coulba/design/overlays"
import { IconMenu } from "@tabler/icons-react"
import { Link } from "@tanstack/react-router"
import { Fragment } from "react"


export function Navigation() {
    const { isMobile } = useDeviceDetect()

    const buttons = (
        <Fragment>
            <div className="w-full flex flex-col md:flex-row justify-start md:justify-end items-end md:items-center gap-2">
                <Link to="/fonctionnalites" className="w-full md:w-fit">
                    <ButtonGhostContent
                        text="Fonctionnalités"
                        className="w-full md:w-fit justify-center"
                    />
                </Link>
                <Link to="/tarif" className="w-full md:w-fit">
                    <ButtonGhostContent
                        text="Tarif"
                        className="w-full md:w-fit justify-center"
                    />
                </Link>
                <Link to="/faq" className="w-full md:w-fit">
                    <ButtonGhostContent
                        text="FAQ"
                        className="w-full md:w-fit justify-center"
                    />
                </Link>
                {/* <a href={import.meta.env.VITE_PUBLIC_DOCUMENTATION_BASE} target="_blank" rel="noopener noreferrer" className="w-full md:w-fit">
                    <ButtonGhostContent
                        icon={<IconExternalLink />}
                        text="Documentation"
                        className="w-full md:w-fit justify-end"
                    />
                </a> */}
                <a href={import.meta.env.VITE_PUBLIC_APP_BASE} target="_blank" rel="noopener noreferrer" className="w-full md:w-fit">
                    <ButtonPlainContent
                        text="Connexion"
                        className="w-full md:w-fit justify-center"
                    />
                </a>
            </div>
        </Fragment>
    )
    return (
        <nav className="w-full flex justify-between items-center md:items-end gap-4 overflow-hidden">
            <Link to="/">
                <div className="flex flex-col justify-start items-start">
                    <Logo />
                    <span className="text-neutral">MonAssoSportive</span>
                </div>
            </Link>
            {
                isMobile ? (
                    <Popover>
                        <PopoverTrigger asChild >
                            <ButtonOutline
                                icon={<IconMenu />}
                            />
                        </PopoverTrigger>
                        <PopoverContent align="end">
                            <div className="p-4">
                                {buttons}
                            </div>
                        </PopoverContent>
                    </Popover>
                ) : (
                    buttons
                )
            }
        </nav>
    )
}
