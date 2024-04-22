import { Main } from "../../../../components/layouts/main/main"
import { UpdateSheetForm } from "../../../../components/sheets/update/updateSheet.form"



export function UpdateSheetPage() {
    return (
        <Main.Root>
            <Main.Header
                title="Modifier une ligne du bilan"
                description="Remplir le formulaire et valider pour modifier les données de la ligne du bilan."
            />
            <UpdateSheetForm />
        </Main.Root>
    )
}
