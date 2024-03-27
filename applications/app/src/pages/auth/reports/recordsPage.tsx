import { Main } from "../../../components/layouts/main/main"
import { RecordsTable } from "../../../components/records/recordsTable"


export function RecordsPage() {
    return (
        <Main.Root>
            <Main.Header
                title="Journal"
                description="Le journal comptable qui contient toutes les entrées enregistrées et validées. Il représente toutes les opérations de votre société."
            >
            </Main.Header>
            <Main.Content>
                <RecordsTable />
            </Main.Content>
        </Main.Root>
    )
}
