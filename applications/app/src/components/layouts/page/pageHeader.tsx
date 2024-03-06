import { ButtonMenu, ButtonMenuContent, ButtonOutline } from "@coulba/design/buttons"
import { PopoverMenu } from "@coulba/design/overlays"
import { IconUser } from "@tabler/icons-react"
import { Link } from "@tanstack/react-router"
import { useSession } from "../../../contexts/session/useSession"
import { DisplayVersion } from "../navigation/displayVersion"
import { Navigation } from "../navigation/navigation"


export function PageHeader() {
    // const { isMobile } = useDeviceDetect()
    // const navigate = useNavigate()
    // const profile = useProfile()
    const session = useSession()

    return (
        <div className="w-full flex flex-col justify-start items-stretch gap-4 md:gap-8 border-r border-neutral/25 p-2 md:p-4 bg-background">
            <div className="w-fit flex justify-start items-center gap-2">
                <Link to="/" className="w-fit flex justify-center items-center">
                    <span className="text-neutral text-3xl">Coulba</span>
                </Link>
            </div>
            <div className="">
                <Navigation />
            </div>
            <div className="mt-auto shrink-0 flex justify-between items-center overflow-hidden">
                <PopoverMenu
                    triggerElement={
                        <ButtonOutline
                            icon={<IconUser />}
                        />
                    }
                    align="end"
                >
                    <Link to="/profil/parametres">
                        <ButtonMenuContent
                            // icon={<IconSettings />}
                            text="Paramètres"
                        />
                    </Link>
                    <a href="https://documentation.coulba.com" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                        <ButtonMenuContent
                            // icon={<IconBook />}
                            text="Documentation"
                        />
                    </a>
                    {/* <CreateOneTicket>
                        <ButtonMenu
                            text="Contacter le support"
                            icon={<IconMessageQuestion />}
                        />
                    </CreateOneTicket> */}
                    <ButtonMenu
                        text="Se déconnecter"
                        // icon={<IconLogout2 />}
                        color="error"
                        onClick={async () => await session.signOut()}
                    />
                </PopoverMenu>
                <DisplayVersion />
            </div>
        </div>
    )
}
