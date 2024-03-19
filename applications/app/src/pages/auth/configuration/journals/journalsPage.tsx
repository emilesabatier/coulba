import { ButtonPlain } from "@coulba/design/buttons"
import { IconPlus } from "@tabler/icons-react"
import { CreateJournal } from "../../../../components/journals/createJournal/createJournal"
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
                <div className="flex flex-col justify-start items-stretch gap-2">
                    <CreateJournal>
                        <ButtonPlain
                            icon={<IconPlus />}
                            text="Ajouter un journal"
                        />
                    </CreateJournal>
                    <JournalsList />
                </div>
            </Main.Content>
        </Main.Root>
    )
}
