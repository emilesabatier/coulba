'use client'

import { Outlet } from "@tanstack/react-router"
import { AgendaIcon } from "../../../components/calendar/calendar.icon"
import { EventIcon } from "../../../components/event/event.icon"
import { Main } from "../../../components/layouts/main/main"
import { Page } from "../../../components/layouts/page/page"
import { LessonIcon } from "../../../components/lesson/lesson.icon"
import { RollcallIcon } from "../../../components/rollcall/rollcall.icon"


export function AgendaLayout() {
    return (
        <Page.Root id="agenda">
            <Page.Header />
            <Page.Main>
                <Page.Navigation />
                <Page.Content>
                    <Main.Root>
                        <Main.Navigation
                            routes={[
                                {
                                    title: "Calendrier",
                                    icon: <AgendaIcon />,
                                    path: "/agenda/calendrier"
                                },
                                {
                                    title: "Cours",
                                    icon: <LessonIcon />,
                                    path: "/agenda/cours"
                                },
                                {
                                    title: "Évènements",
                                    icon: <EventIcon />,
                                    path: "/agenda/evenements"
                                },
                                {
                                    title: "Appels",
                                    icon: <RollcallIcon />,
                                    path: "/agenda/appels"
                                }
                            ]}
                        />
                        <Main.Content
                            children={<Outlet />}
                        />
                    </Main.Root>
                </Page.Content>
            </Page.Main>
        </Page.Root>
    )
}
