'use client'

import { Outlet } from "@tanstack/react-router"
import { CollaboratorIcon } from "../../../components/collaborator/collaborator.icon"
import { Main } from "../../../components/layouts/main/main"
import { Page } from "../../../components/layouts/page/page"
import { PositionIcon } from "../../../components/position/position.icon"


export function CollaboratorsLayout() {
    return (
        <Page.Root id="collaborators">
            <Page.Header />
            <Page.Main>
                <Page.Navigation />
                <Page.Content>
                    <Main.Root>
                        <Main.Navigation
                            routes={[
                                {
                                    title: "Collaborateurs",
                                    icon: <CollaboratorIcon />,
                                    path: "/collaborateurs"
                                },
                                {
                                    title: "Postes",
                                    icon: <PositionIcon />,
                                    path: "/collaborateurs/postes"
                                },
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
