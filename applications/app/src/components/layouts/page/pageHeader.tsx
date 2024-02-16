import { ButtonMenu, ButtonMenuContent, ButtonOutline } from "@coulba/design/buttons"
import { PopoverMenu } from "@coulba/design/overlays"
import { IconAbacus, IconUser } from "@tabler/icons-react"
import { Link } from "@tanstack/react-router"
import { useSession } from "../../../contexts/session/useSession"
import { Navigation } from "../navigation/navigation"


export function PageHeader() {
    // const { isMobile } = useDeviceDetect()
    // const navigate = useNavigate()
    // const profile = useProfile()
    const session = useSession()

    return (
        <div className="w-full flex flex-col justify-start items-stretch gap-4 md:gap-8 border-b-2 border-neutral/25 p-4 md:p-8 pb-0 md:pb-0">
            <div className="w-full flex justify-between items-center gap-2 md:gap-4">
                <div className="w-fit flex flex-wrap justify-start items-center gap-2">
                    <Link to="/" className="w-fit flex justify-start items-center">
                        <IconAbacus size={48} strokeWidth={4} />
                    </Link>
                    <span className="text-neutral text-3xl">Coulba</span>
                </div>
                <div className="shrink-0 flex justify-center items-center overflow-hidden">
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
                </div>
            </div>
            <div className="">
                <Navigation />
            </div>
        </div>
    )
}
