import { createRoute } from "@tanstack/react-router"
import { Banner } from "../../../../../components/layouts/banner"
import { Main } from "../../../../../components/layouts/main"
import { Section } from "../../../../../components/layouts/section/section"
import { OpenYear } from "../../../../../components/years/openYear"
import { useCurrentYear } from "../../../../../contexts/currentYear/useCurrentYear"
import { yearsLayout } from "../years.layout"


export const openYearRoute = createRoute({
    getParentRoute: () => yearsLayout,
    beforeLoad: () => ({
        title: "Ouverture",
        description: undefined
    }),
    path: '/ouverture',
    component: () => {
        const currentYear = useCurrentYear()

        if (!currentYear.data) return (
            <Main>
                <Section.Root>
                    <Section.Item className="p-0">
                        <Banner variant="information">
                            Veuillez ajouter un premier exercice fiscal pour pouvoir accéder à ces fonctionnalités.
                        </Banner>
                    </Section.Item>
                </Section.Root>
            </Main>
        )
        return (
            <Main>
                <OpenYear currentYear={currentYear} />
            </Main>
        )
    }
})
