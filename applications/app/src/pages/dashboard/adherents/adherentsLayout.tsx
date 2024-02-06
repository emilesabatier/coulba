'use client'

import { IconDownload } from "@tabler/icons-react"
import { Outlet } from "@tanstack/react-router"
import { AdherentIcon } from "../../../components/adherent/adherent.icon"
import { Main } from "../../../components/layouts/main/main"
import { Page } from "../../../components/layouts/page/page"
import { RegistrationIcon } from "../../../components/registration/registration.icon"


export function AdherentsLayout() {
    return (
        <Page.Root id="adherents">
            <Page.Header />
            <Page.Main>
                <Page.Navigation />
                <Page.Content>
                    <Main.Root>
                        <Main.Navigation
                            routes={[
                                {
                                    title: "Adhérents",
                                    icon: <AdherentIcon />,
                                    path: "/adherents"
                                },
                                {
                                    title: "Préinscriptions",
                                    icon: <RegistrationIcon />,
                                    path: "/adherents/preinscriptions"
                                },
                                {
                                    title: "Exporter",
                                    icon: <IconDownload />,
                                    path: "/adherents/exporter"
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
