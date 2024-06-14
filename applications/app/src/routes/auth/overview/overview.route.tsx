import { createRoute } from "@tanstack/react-router"
import { Main } from "../../../components/layouts/main"
import { DocumentationBanner } from "../../../components/overview/documentationBanner"
import { DonationBanner } from "../../../components/overview/donationBanner"
import { SupportBanner } from "../../../components/overview/supportBanner"
import { authLayout } from "../auth.layout"
import { ActivationBanner } from "../../../components/overview/activationBanner"


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
                <DocumentationBanner />
                <SupportBanner />
                <DonationBanner />
            </Main>
        )
    }
})
