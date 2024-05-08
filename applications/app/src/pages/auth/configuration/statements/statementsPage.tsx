import { Main } from "../../../../components/layouts/main/main"
import { StatementsList } from "../../../../components/statements/statementsList"
import { useCurrentYear } from "../../../../contexts/currentYear/useCurrentYear"


export function StatementsPage() {
    const currentYear = useCurrentYear()

    if (!currentYear.data) return null
    return (
        <Main.Root>
            <Main.Header
                title="Modèle du compte de résultat"
                description="Vous retrouvez sur cette page le modèle du compte de résultat de l'entreprise que vous pouvez modifier selon votre besoin. Veuillez à bien savoir ce que vous faites avant de supprimer des données."
            />
            <Main.Content>
                <StatementsList />
            </Main.Content>
        </Main.Root>
    )
}
