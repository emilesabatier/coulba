import { Main } from "../../../../components/layouts/main/main"
import { SwitchYear } from "../../../../components/years/switchYear"
import { YearsList } from "../../../../components/years/yearsList"


export function YearsPage() {
    return (
        <Main.Root>
            <Main.Header
                title="Exercices fiscaux"
                description="Vous retrouvez sur cette page la liste des exercices fiscaux enregistrés pour l'entreprise."
            />
            <Main.Content>
                <SwitchYear />
                <YearsList />
            </Main.Content>
        </Main.Root>
    )
}
