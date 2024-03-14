import { ButtonPlain } from "@coulba/design/buttons"
import { IconPlus } from "@tabler/icons-react"
import { Main } from "../../../components/layouts/main/main"
import { CreateYear } from "../../../components/years/createYear/createYear"
import { YearsList } from "../../../components/years/yearsList"


export function YearsPage() {
    return (
        <Main.Root>
            <Main.Header
                title="Exercices fiscaux"
                description="Vous retrouvez sur cette page la liste des exercices fiscaux enregistrés pour l'entreprise."
            >
                <CreateYear>
                    <ButtonPlain
                        icon={<IconPlus />}
                        text="Ajouter un exercice"
                    />
                </CreateYear>
            </Main.Header>
            <Main.Content>
                <YearsList />
            </Main.Content>
        </Main.Root>
    )
}
