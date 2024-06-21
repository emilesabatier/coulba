import { ButtonGhost, ButtonPlain } from "@coulba/design/buttons"
import { FormatNull } from "@coulba/design/formats"
import { CircularLoader } from "@coulba/design/layouts"
import { IconPencil, IconPlus, IconTrash } from "@tabler/icons-react"
import { useQuery } from "@tanstack/react-query"
import { journalsOptions } from "../../services/api/auth/journals/journalsOptions"
import { ErrorMessage } from "../layouts/errorMessage"
import { Section } from "../layouts/section/section"
import { CreateJournal } from "./create/createJournal"
import { DeleteJournal } from "./delete/deleteJournal"
import { UpdateJournal } from "./update/updateJournal"


export function JournalsList() {
    const journals = useQuery(journalsOptions)

    if (journals.isLoading) return <CircularLoader className="m-3" />
    if (journals.isError) return <ErrorMessage message={journals.error.message} />
    if (!journals.data) return null
    return (
        <Section.Root>
            <Section.Item>
                <CreateJournal>
                    <ButtonPlain
                        icon={<IconPlus />}
                        text="Ajouter un journal"
                    />
                </CreateJournal>
            </Section.Item>
            <Section.Item>
                <div className="w-full flex flex-col justify-start items-stretch rounded-md border border-neutral/10">
                    {
                        (journals.data?.length > 0) ?
                            journals.data.map((journal) => {
                                return (
                                    <div className="w-full flex justify-between items-center p-3 border-b border-neutral/5 last:border-b-0">
                                        <div className="flex justify-start items-center gap-3">
                                            <h2>{journal.label}</h2>
                                            <span className="text-neutral/50">{journal.code}</span>
                                        </div>
                                        <div className="flex justify-end items-center gap-1">
                                            <UpdateJournal journal={journal}>
                                                <ButtonGhost
                                                    icon={<IconPencil />}
                                                />
                                            </UpdateJournal>
                                            <DeleteJournal journal={journal}>
                                                <ButtonGhost
                                                    icon={<IconTrash />}
                                                    color="error"
                                                />
                                            </DeleteJournal>
                                        </div>
                                    </div>
                                )
                            })
                            : (
                                <FormatNull className="p-3" />
                            )
                    }
                </div>
            </Section.Item>
        </Section.Root>
    )
}
