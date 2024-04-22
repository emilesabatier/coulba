import { JournalsList } from "../../../../components/journals/journalsList"
import { Main } from "../../../../components/layouts/main/main"


export function JournalsPage() {
    return (
        <Main.Root>
            <Main.Header
                title="Journaux comptables"
                description="Vous retrouvez sur cette page la liste des journaux comptables."
            />
            <Main.Content>
                <JournalsList />
            </Main.Content>
        </Main.Root>
    )
}
