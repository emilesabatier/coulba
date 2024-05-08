import { Main } from "../../../../components/layouts/main/main"
import { CreateSheetForm } from "../../../../components/sheets/create/createSheet.form"



export function CreateSheetPage() {
    return (
        <Main.Root>
            <Main.Header
                title="Ajouter une ligne dans le bilan"
                description="Remplir le formulaire et valider pour ajouter une nouvelle ligne dans le bilan."
            />
            <Main.Content>
                <CreateSheetForm />
            </Main.Content>
        </Main.Root>
    )
}
