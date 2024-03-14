import { ButtonGhost } from "@coulba/design/buttons"
import { FormatNull } from "@coulba/design/formats"
import { IconPencil, IconTrash } from "@tabler/icons-react"
import { useQuery } from "@tanstack/react-query"
import { Fragment } from "react"
import { journalOptions } from "../../services/api/auth/journals/journalsOptions"
import { ErrorMessage } from "../layouts/errorMessage"
import { Loading } from "../layouts/loading"
import { DeleteJournal } from "./deleteJournal/deleteJournal"
import { UpdateJournal } from "./updateJournal/updateJournal"


export function JournalsList() {
    const journals = useQuery(journalOptions)

    if (journals.isPending) return <Loading />
    if (journals.isError) return <ErrorMessage message={journals.error.message} />
    return (
        <div className="w-full h-full flex flex-col justify-start items-stretch gap-2 overflow-auto border border-neutral/25 rounded-sm p-4">
            {
                (!journals.data || journals.data?.length === 0) ? (<FormatNull />) : journals.data.map((journal, index) => {
                    return (
                        <Fragment>
                            {index === 0 ? null : (<div className="h-[1px] w-full bg-neutral/10" />)}
                            <div className="w-full flex justify-between items-center gap-4">
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
                        </Fragment>
                    )
                })
            }
        </div>
    )
}
