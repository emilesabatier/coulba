import { Main } from "../../../../components/layouts/main/main"
import { CreateStatementForm } from "../../../../components/statements/create/createStatement.form"


export function CreateStatementPage() {
    return (
        <Main.Root>
            <Main.Header
                title="Ajouter une ligne dans le compte de résultat"
                description="Remplir le formulaire et valider pour ajouter une ligne dans le compte de résultat."
            />
            <Main.Content>
                <CreateStatementForm />
            </Main.Content>
        </Main.Root>
    )
}
