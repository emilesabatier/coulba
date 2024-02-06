'use client'

import { IconLock } from "@tabler/icons-react"
import { Outlet } from "@tanstack/react-router"
import { Main } from "../../../components/layouts/main/main"
import { Page } from "../../../components/layouts/page/page"
import { ProfileIcon } from "../../../components/profile/profile.icon"


export function ProfileLayout() {
    return (
        <Page.Root id="profile">
            <Page.Header />
            <Page.Main>
                <Page.Navigation />
                <Page.Content>
                    <Main.Root>
                        <Main.Navigation
                            routes={[
                                {
                                    title: "Informations",
                                    icon: <ProfileIcon />,
                                    path: "/profil/informations"
                                },
                                {
                                    title: "Sécurité",
                                    icon: <IconLock />,
                                    path: "/profil/securite"
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
