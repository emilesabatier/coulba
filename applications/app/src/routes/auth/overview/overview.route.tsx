import { createRoute } from "@tanstack/react-router"
import { Main } from "../../../components/layouts/main"
import { Section } from "../../../components/layouts/section/section"
import { ActivationBanner } from "../../../components/overview/activationBanner"
import { DonationBanner } from "../../../components/overview/donationBanner"
import { SupportBanner } from "../../../components/overview/supportBanner"
import { EmailValidationBanner } from "../../../components/overview/validateEmailBanner"
import { authLayout } from "../auth.layout"


export const overviewRoute = createRoute({
    getParentRoute: () => authLayout,
    beforeLoad: () => ({
        title: "Accueil",
        description: "Pour rapidement voir ce qui concerne votre activité sur l'application"
    }),
    path: '/',
    component: () => {
        return (
            <Main>
                <Section.Root>
                    <ActivationBanner />
                    <EmailValidationBanner />
                    <Section.Item className="grid grid-cols-3">
                        {/* <DocumentationBanner /> */}
                        <SupportBanner />
                        <DonationBanner />
                    </Section.Item>
                </Section.Root>
            </Main>
        )
    }
})
