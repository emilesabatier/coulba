import { ButtonPlain } from "@coulba/design/buttons"
import { IconPlus } from "@tabler/icons-react"
import { CreateJournal } from "../../../components/journals/createJournal/createJournal"
import { JournalsList } from "../../../components/journals/journalsList"
import { Main } from "../../../components/layouts/main/main"


export function JournalsPage() {
    return (
        <Main.Root>
            <Main.Header
                title="Journaux comptables"
                description="Vous retrouvez sur cette page la liste des journaux comptables."
            >
                <CreateJournal>
                    <ButtonPlain
                        icon={<IconPlus />}
                        text="Ajouter un journal"
                    />
                </CreateJournal>
            </Main.Header>
            <Main.Content>
                <JournalsList />
            </Main.Content>
        </Main.Root>
    )
}
