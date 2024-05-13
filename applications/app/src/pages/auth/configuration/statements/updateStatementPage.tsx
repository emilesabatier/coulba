import { Main } from "../../../../components/layouts/main/main"
import { UpdateStatementForm } from "../../../../components/statements/update/updateStatement.form"


export function UpdateStatementPage() {
    return (
        <Main.Root>
            <Main.Header
                title="Modifier une ligne du compte de résultat"
                description="Remplir le formulaire et valider pour modifier les données de la ligne du bilan."
            />
            <UpdateStatementForm />
        </Main.Root>
    )
}
