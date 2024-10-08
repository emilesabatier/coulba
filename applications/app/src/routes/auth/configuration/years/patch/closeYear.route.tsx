import { createRoute } from "@tanstack/react-router"
import { Banner } from "../../../../../components/layouts/banner"
import { Main } from "../../../../../components/layouts/main"
import { Section } from "../../../../../components/layouts/section/section"
import { CloseYear } from "../../../../../components/years/closeYear"
import { useCurrentYear } from "../../../../../contexts/currentYear/useCurrentYear"
import { yearsLayout } from "../years.layout"


export const closeYearRoute = createRoute({
    getParentRoute: () => yearsLayout,
    beforeLoad: () => ({
        title: "Clôture",
        description: "Vous pouvez sur cette page clôturer l'exercice fiscal en cours et générer la version finale des documents comptables."
    }),
    path: '/cloture',
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
                <CloseYear currentYear={currentYear} />
            </Main>
        )
    }
})
