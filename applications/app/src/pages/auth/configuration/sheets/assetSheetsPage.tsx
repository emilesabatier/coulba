import { ButtonOutline } from "@coulba/design/buttons"
import { Link } from "@tanstack/react-router"
import { Main } from "../../../../components/layouts/main"
import { Section } from "../../../../components/layouts/section/section"


export function StatementsPage() {
    return (
        <Main>
            <Section.Root>
                <Section.Item>
                    <div className="flex flex-col justify-start items-start">
                        <h2 className="text-2xl">Lignes</h2>
                        <p className="text-neutral/50">Consulter et modifier les lignes du compte de résultat</p>
                    </div>
                    <Link to="/configuration/compte-de-resultat/lignes" >
                        <ButtonOutline
                            text="Consulter"
                        />
                    </Link>
                </Section.Item>
                <Section.Item>
                    <div className="flex flex-col justify-start items-start">
                        <h2 className="text-2xl">Calculs</h2>
                        <p className="text-neutral/50">Consulter et modifier les calculs du compte de résultat</p>
                    </div>
                    <Link to="/configuration/compte-de-resultat/calculs">
                        <ButtonOutline
                            text="Consulter"
                        />
                    </Link>
                </Section.Item>
            </Section.Root>
        </Main>
    )
}
