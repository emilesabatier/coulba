import { Main } from "../../../components/layouts/main/main"
import { RecordsTable } from "../../../components/records/recordsTable"


export function RecordsPage() {
    return (
        <Main.Root>
            <Main.Header />
            <Main.Content>
                <RecordsTable />
            </Main.Content>
        </Main.Root>
    )
}
