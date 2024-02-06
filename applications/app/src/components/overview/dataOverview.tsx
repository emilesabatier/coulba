import { useAdherents } from "../../hooks/data/useAdherents"
import { useCollaborators } from "../../hooks/data/useCollaborators"
import { useEvents } from "../../hooks/data/useEvents"
import { useLessons } from "../../hooks/data/useLessons"
import { AdherentIcon } from "../adherent/adherent.icon"
import { CollaboratorIcon } from "../collaborator/collaborator.icon"
import { EventIcon } from "../event/event.icon"
import { Placeholder } from "../layouts/placeholder"
import { Restricted } from "../layouts/restricted"
import { LessonIcon } from "../lesson/lesson.icon"


export function DataOverview() {
    const adherents = useAdherents()
    const collaborators = useCollaborators()
    const lessons = useLessons()
    const events = useEvents()

    return (
        <ol className="w-full md:w-fit md:max-w-full flex flex-col justify-start items-start flex-wrap gap-2 p-2 md:p-4 rounded-md bg-background/50">
            <Restricted resource="adherent"
                action="read">
                <li className="w-full bg-white rounded">
                    <div className="w-full flex justify-start items-start gap-2 md:gap-4 p-2 md:p-4 pl-0 md:pl-0">
                        <div className="min-w-[42px] min-h-[40px] bg-primary/5 flex justify-center items-center p-2 pl-4 rounded-r-md">
                            <AdherentIcon className="stroke-primary" />
                        </div>
                        <div className="flex flex-col justify-start items-start overflow-hidden">
                            <span className="w-full uppercase text-xs text-neutral/50 whitespace-nowrap overflow-hidden text-ellipsis">Adhérents</span>
                            <Placeholder error={adherents.error} isLoading={adherents.isLoading} loadingType="circular">
                                <span className="text-base font-bold">{adherents.data?.length}</span>
                            </Placeholder>
                        </div>
                    </div>
                </li>
            </Restricted>
            <Restricted resource="collaborator"
                action="read">
                <li className="w-full bg-white rounded">
                    <div className="w-full flex justify-start items-start gap-2 md:gap-4 p-2 md:p-4 pl-0 md:pl-0">
                        <div className="min-w-[42px] min-h-[40px] bg-primary/5 flex justify-center items-center p-2 pl-4 rounded-r-md">
                            <CollaboratorIcon className="stroke-primary" />
                        </div>
                        <div className="flex flex-col justify-start items-start overflow-hidden">
                            <span className="w-full uppercase text-xs text-neutral/50 whitespace-nowrap overflow-hidden text-ellipsis">Collaborateurs</span>
                            <Placeholder error={collaborators.error} isLoading={collaborators.isLoading} loadingType="circular">
                                <span className="text-base font-bold">{collaborators.data?.length}</span>
                            </Placeholder>
                        </div>
                    </div>
                </li>
            </Restricted>
            <Restricted resource="lesson"
                action="read">
                <li className="w-full bg-white rounded">
                    <div className="w-full flex justify-start items-start gap-2 md:gap-4 p-2 md:p-4 pl-0 md:pl-0">
                        <div className="min-w-[42px] min-h-[40px] bg-primary/5 flex justify-center items-center p-2 pl-4 rounded-r-md">
                            <LessonIcon className="stroke-primary" />
                        </div>
                        <div className="flex flex-col justify-start items-start overflow-hidden">
                            <span className="w-full uppercase text-xs text-neutral/50 whitespace-nowrap overflow-hidden text-ellipsis">Cours</span>
                            <Placeholder error={lessons.error} isLoading={lessons.isLoading} loadingType="circular">
                                <span className="text-base font-bold">{lessons.data?.length}</span>
                            </Placeholder>
                        </div>
                    </div>
                </li>
            </Restricted>
            <Restricted resource="event"
                action="read">
                <li className="w-full bg-white rounded">
                    <div className="w-full flex justify-start items-start gap-2 md:gap-4 p-2 md:p-4 pl-0 md:pl-0">
                        <div className="min-w-[42px] min-h-[40px] bg-primary/5 flex justify-center items-center p-2 pl-4 rounded-r-md">
                            <EventIcon className="stroke-primary" />
                        </div>
                        <div className="flex flex-col justify-start items-start overflow-hidden">
                            <span className="w-full uppercase text-xs text-neutral/50 whitespace-nowrap overflow-hidden text-ellipsis">Évènements</span>
                            <Placeholder error={events.error} isLoading={events.isLoading} loadingType="circular">
                                <span className="text-base font-bold">{events.data?.length}</span>
                            </Placeholder>
                        </div>
                    </div>
                </li>
            </Restricted>
        </ol>
    )
}
