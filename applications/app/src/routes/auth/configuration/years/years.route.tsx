import { Link, createRoute } from "@tanstack/react-router"
import { Banner } from "../../../../components/layouts/banner"
import { Main } from "../../../../components/layouts/main"
import { Section } from "../../../../components/layouts/section/section"
import { formatYear } from "../../../../components/years/format/formatYear"
import { useCurrentYear } from "../../../../contexts/currentYear/useCurrentYear"
import { yearsLayout } from "./years.layout"


export const yearsRoute = createRoute({
    getParentRoute: () => yearsLayout,
    beforeLoad: () => ({
        title: undefined,
        description: "Vous retrouvez sur cette page la liste des exercices fiscaux enregistrés pour l'entreprise."
    }),
    path: '/',
    component: () => {
        const currentYear = useCurrentYear()
        return (
            <Main>
                <Section.Root>
                    <Section.Item className="p-0">
                        {
                            !currentYear?.data ? (
                                <Banner variant="error">
                                    Aucun exercice n'est sélectionné.
                                </Banner>
                            ) : (
                                <Banner variant="information">
                                    <b>{formatYear(currentYear.data)}</b> est l'exercice actuellement sélectionné.
                                </Banner>
                            )
                        }
                    </Section.Item>
                    <Section.Item className="p-0">
                        <Link to="/configuration/exercices/liste" className="w-full p-3 cursor-pointer hover:bg-neutral/5">
                            <div className="flex flex-col justify-start items-start">
                                <h2 className="text-2xl">Liste des exercices</h2>
                                <p className="text-neutral/50">Ajouter, consulter et modifier les exercices de votre organisation</p>
                            </div>
                        </Link>
                    </Section.Item>
                    <Section.Item className="p-0">
                        <Link to="/configuration/exercices/changer" className="w-full p-3 cursor-pointer hover:bg-neutral/5">
                            <div className="flex flex-col justify-start items-start">
                                <h2 className="text-2xl">Changer d'exercice</h2>
                                <p className="text-neutral/50">Sélectionner l'exercice fiscal courant affiché dans l'application</p>
                            </div>
                        </Link>
                    </Section.Item>
                    <Section.Item className="p-0">
                        <Link to="/configuration/exercices/cloture" className="w-full p-3 cursor-pointer hover:bg-neutral/5">
                            <div className="flex flex-col justify-start items-start">
                                <h2 className="text-2xl">Clôture de l'exercice</h2>
                                <p className="text-neutral/50">Effectuer les opérations de clôture sur l'exercice actuellement sélectionné</p>
                            </div>
                        </Link>
                    </Section.Item>
                    <Section.Item className="p-0">
                        <Link to="/configuration/exercices/documents" className="w-full p-3 cursor-pointer hover:bg-neutral/5">
                            <div className="flex flex-col justify-start items-start">
                                <h2 className="text-2xl">Télécharger les documents</h2>
                                <p className="text-neutral/50">Télécharger les documents comptables (FEC, bilan, compte de résultat)</p>
                            </div>
                        </Link>
                    </Section.Item>
                    <Section.Item className="p-0">
                        <Link to="/configuration/exercices/ouverture" className="w-full p-3 cursor-pointer hover:bg-neutral/5">
                            <div className="flex flex-col justify-start items-start">
                                <h2 className="text-2xl">Ouverture de l'exercice</h2>
                                <p className="text-neutral/50">Effectuer les opérations d'ouverture de l'exercice actuellement sélectionné</p>
                            </div>
                        </Link>
                    </Section.Item>
                </Section.Root>
            </Main>
        )
    }
})
