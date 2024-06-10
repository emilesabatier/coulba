import { Link } from "@tanstack/react-router"
import { useSession } from "../../contexts/session/useSession"
import { Banner } from "../layouts/banner"
import { Section } from "../layouts/section/section"


export function ActivationBanner() {
    const session = useSession()

    if (session.profile?.isInvitationValidated === undefined) return null
    if (session.profile.isInvitationValidated) return null
    return (
        <Section.Item className="p-0">
            <Banner variant="warning">
                Votre compte n'est pas activé. Vous pouvez l'activer en&nbsp;
                <Link
                    to="/activation"
                    className="text-warning underline hover:no-underline"
                >
                    cliquant ici
                </Link>
                .
            </Banner>
        </Section.Item>
    )
}
