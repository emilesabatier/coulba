import { Main } from "../../../components/layouts/main/main"
import { RecordsContent } from "../../../components/reports/records/recordsContent"


export function RecordsPage() {
    return (
        <Main.Root>
            <Main.Header
                title="Journal"
                description="Le journal comptable contient toutes les entrées enregistrées et validées. Il représente toutes les opérations de votre société."
            >
            </Main.Header>
            <Main.Content>
                <RecordsContent />
            </Main.Content>
        </Main.Root>
    )
}
