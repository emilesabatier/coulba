import { ButtonMenu, ButtonOutline } from "@monassosportive/design/buttons"
import { useDeviceDetect } from "@monassosportive/design/hooks"
import { Logo } from "@monassosportive/design/layouts"
import { PopoverMenu } from "@monassosportive/design/overlays"
import { IconLogout2, IconMessageQuestion } from "@tabler/icons-react"
import { Link, useNavigate } from "@tanstack/react-router"
import { useProfile } from "../../../hooks/useProfile"
import { capitalize } from "../../../services/capitalize.service"
import { ProfileIcon } from "../../profile/profile.icon"
import { SignOut } from "../../profile/signOut"
import { CreateOneTicket } from "../../support/contactSupport/createOneTicket/createOneTicket"


export function PageHeader() {
    const { isMobile } = useDeviceDetect()
    const navigate = useNavigate()
    const profile = useProfile()

    return (
        <div className="w-full flex justify-between items-center overflow-hidden gap-2 md:gap-4 p-2 md:p-4 bg-white shadow-outer md:rounded-bl-md">
            <div className="w-fit flex flex-wrap justify-start items-end gap-2">
                <Link to="/" className="w-fit flex justify-start items-center">
                    <Logo />
                </Link>
                <span className="text-primary">MonAssoSportive</span>
            </div>
            <div className="shrink-0 flex justify-end items-center gap-1 overflow-hidden">
                <PopoverMenu
                    triggerElement={
                        <ButtonOutline
                            text={isMobile ? undefined : (!profile.data ? "Mon compte" : `${capitalize(profile.data?.contact.surname)} ${capitalize(profile.data?.contact.forename)}`)}
                            icon={<ProfileIcon />}
                        />
                    }
                    align="end"
                >
                    <ButtonMenu
                        text="Mon profil"
                        onClick={() => navigate({ to: "/profil" })}
                        icon={<ProfileIcon />}
                    />
                    {/* <ButtonMenu
                        onClick={() => navigate({ to: "/documentation/$articlePath", params: { articlePath: currentRoute?.articlePath ?? "" } })}
                        icon={<DocumentationIcon />}
                        text="Documentation"
                    /> */}
                    <CreateOneTicket>
                        <ButtonMenu
                            text="Contacter le support"
                            icon={<IconMessageQuestion />}
                        />
                    </CreateOneTicket>
                    <SignOut>
                        <ButtonMenu
                            text="Se déconnecter"
                            icon={<IconLogout2 />}
                            color="error"
                        />
                    </SignOut>
                </PopoverMenu>
            </div>
        </div>
    )
}
