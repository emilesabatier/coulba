import { ButtonMenu, ButtonMenuContent, ButtonOutline } from "@coulba/design/buttons"
import { Logo } from "@coulba/design/layouts"
import { PopoverMenu } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { IconBook, IconExternalLink, IconLogout2, IconSettings, IconUser } from "@tabler/icons-react"
import { Link } from "@tanstack/react-router"
import * as v from 'valibot'
import { SessionContext } from "../../../contexts/session/session.context"
import { formatUser } from "../../users/format/formatUser"
import { DisplayVersion } from "../navigation/displayVersion"
import { Navigation } from "../navigation/navigation"


type PageNavigation = {
    session: SessionContext
    profile: v.Output<typeof auth.users.get.return>
}

export function PageNavigation(props: PageNavigation) {
    return (
        <div className="w-full flex flex-col justify-start items-stretch gap-4 md:gap-8 border-r border-neutral/25 p-2 md:p-4">
            <div className="w-fit flex justify-start items-center gap-2 p-2">
                <Link to="/" className="w-fit flex justify-center items-center">
                    <Logo />
                </Link>
            </div>
            <div className="">
                <Navigation />
            </div>
            <div className="mt-auto shrink-0 flex flex-col justify-end items-stretch gap-2 overflow-hidden">
                <DisplayVersion />
                <PopoverMenu
                    triggerElement={
                        <ButtonOutline
                            text={formatUser(props.profile)}
                            icon={<IconUser />}
                            className="w-full"
                        />
                    }
                    align="start"
                >
                    <Link to="/profil">
                        <ButtonMenuContent
                            icon={<IconSettings />}
                            text="Profil & paramètres"
                        />
                    </Link>
                    <a href="https://documentation.coulba.fr" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                        <ButtonMenuContent
                            icon={<IconBook />}
                            text="Documentation"
                        />
                    </a>
                    <a href={import.meta.env.VITE_PUBLIC_WEBSITE_BASE} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                        <ButtonMenuContent
                            icon={<IconExternalLink />}
                            text="Site internet"
                        />
                    </a>
                    {/* <CreateTicket>
                        <ButtonMenu
                            text="Contacter le support"
                            icon={<IconMessageQuestion />}
                        />
                    </CreateTicket> */}
                    <ButtonMenu
                        text="Se déconnecter"
                        icon={<IconLogout2 />}
                        color="error"
                        onClick={async () => await props.session.signOut()}
                    />
                </PopoverMenu>
            </div>
        </div>
    )
}
