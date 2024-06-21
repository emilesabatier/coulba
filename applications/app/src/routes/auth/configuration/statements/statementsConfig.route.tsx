import { Link, createRoute } from "@tanstack/react-router"
import { Main } from "../../../../components/layouts/main"
import { Section } from "../../../../components/layouts/section/section"
import { statementsConfigLayout } from "./statementsConfig.layout"
import { ButtonOutlineContent } from "@coulba/design/buttons"


export const statementsConfigRoute = createRoute({
    getParentRoute: () => statementsConfigLayout,
    beforeLoad: () => ({
        title: undefined,
        description: "Vous retrouvez sur cette page le modèle du compte de résultat de l'entreprise que vous pouvez modifier selon votre besoin. Veuillez à bien savoir ce que vous faites avant de supprimer des données."
    }),
    path: '/',
    component: () => (
        <Main>
            <Section.Root>
                <Section.Item className="grid grid-cols-3">
                    <div className="w-full h-full border border-neutral/10 rounded-md p-3 flex flex-col justify-between items-start gap-3">
                        <div className="flex flex-col justify-start items-start">
                            <h2 className="text-2xl">Postes</h2>
                            <p className="text-neutral/50">Consulter et modifier les postes de compte de résultat</p>
                        </div>
                        <Link to="/configuration/compte-de-resultat/postes" className="ml-auto">
                            <ButtonOutlineContent text="Consulter les postes" />
                        </Link>
                    </div>
                    <div className="w-full h-full border border-neutral/10 rounded-md p-3 flex flex-col justify-between items-start gap-3">
                        <div className="flex flex-col justify-start items-start">
                            <h2 className="text-2xl">Calculs</h2>
                            <p className="text-neutral/50">Consulter et modifier les calculs du compte de résultat</p>
                        </div>
                        <Link to="/configuration/compte-de-resultat/calculs" className="ml-auto">
                            <ButtonOutlineContent text="Consulter les calculs" />
                        </Link>
                    </div>
                </Section.Item>
            </Section.Root>
        </Main>
    )
})
