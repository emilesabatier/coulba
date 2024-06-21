import { useSession } from "../../contexts/session/useSession"
import { Banner } from "../layouts/banner"
import { Section } from "../layouts/section/section"
import { SendEmailValidation } from "../profile/sendEmailValidation"


export function EmailValidationBanner() {
    const session = useSession()

    if (session.profile?.isEmailValidated === undefined) return null
    if (session.profile.isEmailValidated) return null
    return (
        <Section.Item className="p-0">
            <Banner variant="warning">
                Une email de validation a été envoyé à <b>{session.profile.email}</b>.
                <br />
                Si vous ne l'avez pas reçu, vous pouvez en renvoyer un en&nbsp;
                <SendEmailValidation>
                    <span className="text-warning underline hover:no-underline"   >
                        cliquant ici
                    </span>
                </SendEmailValidation>
                .
            </Banner>
        </Section.Item>
    )
}
