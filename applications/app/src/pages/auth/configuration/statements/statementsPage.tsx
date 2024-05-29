import { Link } from "@tanstack/react-router"
import { Main } from "../../../../components/layouts/main"
import { Section } from "../../../../components/layouts/section/section"


export function StatementsPage() {
    return (
        <Main>
            <Section.Root>
                <Section.Item className="p-0">
                    <Link to="/configuration/compte-de-resultat/lignes" className="w-full p-3 cursor-pointer hover:bg-neutral/5">
                        <div className="flex flex-col justify-start items-start">
                            <h2 className="text-2xl">Lignes</h2>
                            <p className="text-neutral/50">Consulter et modifier les lignes du compte de résultat</p>
                        </div>
                    </Link>
                </Section.Item>
                <Section.Item className="p-0">
                    <Link to="/configuration/compte-de-resultat/calculs" className="w-full p-3 cursor-pointer hover:bg-neutral/5">
                        <div className="flex flex-col justify-start items-start">
                            <h2 className="text-2xl">Calculs</h2>
                            <p className="text-neutral/50">Consulter et modifier les calculs du compte de résultat</p>
                        </div>
                    </Link>
                </Section.Item>
            </Section.Root>
        </Main>
    )
}
