import { ApiContent } from "../../../components/company/apiContent"
import { Main } from "../../../components/layouts/main/main"


export function APIPage() {
    return (
        <Main.Root>
            <Main.Header
                title="Accès API"
                description="Vous retrouvez sur cette page la clé API qui vous permettra d'automatiser l'ajout d'enregistrements depuis une source externe."
            >
            </Main.Header>
            <Main.Content>
                <ApiContent />
            </Main.Content>
        </Main.Root>
    )
}
