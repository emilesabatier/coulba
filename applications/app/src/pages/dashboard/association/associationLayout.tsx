'use client'

import { IconInfoSquareRounded } from "@tabler/icons-react"
import { Outlet } from "@tanstack/react-router"
import { Main } from "../../../components/layouts/main/main"
import { Page } from "../../../components/layouts/page/page"
import { SeasonIcon } from "../../../components/season/season.icon"
import { SportIcon } from "../../../components/sport/sport.icon"


export function AssociationLayout() {
    return (
        <Page.Root id="association">
            <Page.Header />
            <Page.Main>
                <Page.Navigation />
                <Page.Content>
                    <Main.Root>
                        <Main.Navigation
                            routes={[
                                {
                                    title: "Informations",
                                    icon: <IconInfoSquareRounded />,
                                    path: "/association/informations"
                                },
                                {
                                    title: "Sports",
                                    icon: <SportIcon />,
                                    path: "/association/sports"
                                },
                                {
                                    title: "Saisons",
                                    icon: <SeasonIcon />,
                                    path: "/association/saisons"
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
