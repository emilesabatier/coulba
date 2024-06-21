import { ButtonOutlineContent } from "@coulba/design/buttons"
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
                    <Section.Item className="grid grid-cols-3">
                        <div className="w-full h-full border border-neutral/10 rounded-md p-3 flex flex-col justify-between items-start gap-3">
                            <div className="flex flex-col justify-start items-start">
                                <h2 className="text-2xl">Liste des exercices</h2>
                                <p className="text-neutral/50">Ajouter, consulter et modifier les exercices de votre organisation</p>
                            </div>
                            <Link to="/configuration/exercices/liste" className="ml-auto">
                                <ButtonOutlineContent text="Consulter la liste" />
                            </Link>
                        </div>
                        <div className="w-full h-full border border-neutral/10 rounded-md p-3 flex flex-col justify-between items-start gap-3">
                            <div className="flex flex-col justify-start items-start">
                                <h2 className="text-2xl">Changer d'exercice</h2>
                                <p className="text-neutral/50">Sélectionner l'exercice fiscal courant affiché dans l'application</p>
                            </div>
                            <Link to="/configuration/exercices/changer" className="ml-auto">
                                <ButtonOutlineContent text="Changer l'exercice actuel" />
                            </Link>
                        </div>
                        <div className="w-full h-full border border-neutral/10 rounded-md p-3 flex flex-col justify-between items-start gap-3">
                            <div className="flex flex-col justify-start items-start">
                                <h2 className="text-2xl">Clôture de l'exercice</h2>
                                <p className="text-neutral/50">Effectuer les opérations de clôture sur l'exercice actuellement sélectionné</p>
                            </div>
                            <Link to="/configuration/exercices/cloture" className="ml-auto">
                                <ButtonOutlineContent text="Clôturer l'exercice" />
                            </Link>
                        </div>
                        <div className="w-full h-full border border-neutral/10 rounded-md p-3 flex flex-col justify-between items-start gap-3">
                            <div className="flex flex-col justify-start items-start">
                                <h2 className="text-2xl">Télécharger les documents</h2>
                                <p className="text-neutral/50">Télécharger les documents comptables (FEC, bilan, compte de résultat)</p>
                            </div>
                            <Link to="/configuration/exercices/documents" className="ml-auto">
                                <ButtonOutlineContent text="Clôturer l'exercice" />
                            </Link>
                        </div>
                        <div className="w-full h-full border border-neutral/10 rounded-md p-3 flex flex-col justify-between items-start gap-3">
                            <div className="flex flex-col justify-start items-start">
                                <h2 className="text-2xl">Ouverture de l'exercice</h2>
                                <p className="text-neutral/50">Effectuer les opérations d'ouverture de l'exercice actuellement sélectionné</p>
                            </div>
                            <Link to="/configuration/exercices/ouverture" className="ml-auto">
                                <ButtonOutlineContent text="Clôturer l'exercice" />
                            </Link>
                        </div>
                    </Section.Item>
                </Section.Root>
            </Main>
        )
    }
})
