import { createRoute } from "@tanstack/react-router"
import { Main } from "../../../components/layouts/main"
import { ActivationBanner } from "../../../components/overview/activationBanner"
import { DocumentationBanner } from "../../../components/overview/documentationBanner"
import { DonationBanner } from "../../../components/overview/donationBanner"
import { SupportBanner } from "../../../components/overview/supportBanner"
import { authLayout } from "../auth.layout"
import { EmailValidationBanner } from "../../../components/overview/validateEmailBanner"


export const overviewRoute = createRoute({
    getParentRoute: () => authLayout,
    beforeLoad: () => ({
        title: "Vue d'ensemble",
        description: "Pour rapidement voir ce qui concerne votre activité sur l'application"
    }),
    path: '/',
    component: () => {
        return (
            <Main>
                <ActivationBanner />
                <EmailValidationBanner />
                <DocumentationBanner />
                <SupportBanner />
                <DonationBanner />
            </Main>
        )
    }
})
