import { Main } from "../../../components/layouts/main/main"
import { StatementContent } from "../../../components/reports/statement/statementContent"


export function StatementPage() {
    return (
        <Main.Root>
            <Main.Header
                title="Compte de résultats"
                description="Le compte de résultat permet d'avoir une vue globale sur l'activité' de l'entreprise."
            >
            </Main.Header>
            <Main.Content>
                <StatementContent />
            </Main.Content>
        </Main.Root>
    )
}
