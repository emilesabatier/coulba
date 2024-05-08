import { ButtonGhost, ButtonOutline } from "@coulba/design/buttons"
import { FormatNull } from "@coulba/design/formats"
import { CircularLoader } from "@coulba/design/layouts"
import { IconPencil, IconPlus, IconTrash } from "@tabler/icons-react"
import { useQuery } from "@tanstack/react-query"
import { journalsOptions } from "../../services/api/auth/journals/journalsOptions"
import { ErrorMessage } from "../layouts/errorMessage"
import { CreateJournal } from "./create/createJournal"
import { DeleteJournal } from "./delete/deleteJournal"
import { UpdateJournal } from "./update/updateJournal"


export function JournalsList() {
    const journals = useQuery(journalsOptions)

    if (journals.isLoading) return <CircularLoader />
    if (journals.isError) return <ErrorMessage message={journals.error.message} />
    if (!journals.data) return null
    return (
        <div className="w-full h-full flex flex-col justify-start items-stretch overflow-auto border border-neutral/20 rounded-md">
            <div className="w-full flex justify-between items-center p-4 border-b border-neutral/10 last:border-b-0">
                <CreateJournal>
                    <ButtonOutline
                        className="border-dashed"
                        icon={<IconPlus />}
                        text="Ajouter un journal"
                    />
                </CreateJournal>
            </div>
            {
                (!journals.data || journals.data?.length === 0) ? (<FormatNull />) : journals.data.map((journal) => {
                    return (
                        <div className="w-full flex justify-between items-center p-2 border-b border-neutral/5 last:border-b-0">
                            <div className="flex justify-start items-center gap-4 p-2">
                                <h2>{journal.label}</h2>
                                <span className="text-neutral/50">{journal.acronym}</span>
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
            }
        </div>
    )
}
