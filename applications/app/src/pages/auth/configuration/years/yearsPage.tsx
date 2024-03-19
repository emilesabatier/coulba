import { ButtonPlain } from "@coulba/design/buttons"
import { IconPlus } from "@tabler/icons-react"
import { Main } from "../../../../components/layouts/main/main"
import { CreateYear } from "../../../../components/years/createYear/createYear"
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
                <div className="flex flex-col justify-start items-stretch gap-2">
                    <CreateYear>
                        <ButtonPlain
                            icon={<IconPlus />}
                            text="Ajouter un exercice"
                        />
                    </CreateYear>
                    <YearsList />
                </div>
            </Main.Content>
        </Main.Root>
    )
}
