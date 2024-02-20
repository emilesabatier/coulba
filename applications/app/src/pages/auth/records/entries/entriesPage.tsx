import { EntriesTable } from "../../../../components/entries/entriesTable"
import { Main } from "../../../../components/layouts/main/main"


export function EntriesPage() {
    return (
        <Main.Root>
            <Main.Header />
            <Main.Content>
                <EntriesTable />
            </Main.Content>
        </Main.Root>
    )
}
