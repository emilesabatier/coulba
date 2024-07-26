import { createRoute } from "@tanstack/react-router"
import { Banner } from "../../../../../components/layouts/banner"
import { Main } from "../../../../../components/layouts/main"
import { Section } from "../../../../../components/layouts/section/section"
import { useCurrentYear } from "../../../../../contexts/currentYear/useCurrentYear"
import { yearsLayout } from "../years.layout"
import { GenerateClosingOperations } from "../../../../../components/years/generateClosingOperations"


export const generateClosingOperationsRoute = createRoute({
    getParentRoute: () => yearsLayout,
    beforeLoad: () => ({
        title: "Générer les opérations de clôture",
        description: "Vous pouvez sur cette page générer la version finale des documents comptables."
    }),
    path: '/generer-operations-de-cloture',
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
                <GenerateClosingOperations currentYear={currentYear} />
            </Main>
        )
    }
})
