'use client'

import { Outlet } from "@tanstack/react-router"
import { AccountIcon } from "../../../components/account/account.icon"
import { Main } from "../../../components/layouts/main/main"
import { Page } from "../../../components/layouts/page/page"
import { RoleIcon } from "../../../components/role/role.icon"


export function AccountsLayout() {
    return (
        <Page.Root id="accounts">
            <Page.Header />
            <Page.Main>
                <Page.Navigation />
                <Page.Content>
                    <Main.Root>
                        <Main.Navigation
                            routes={[
                                {
                                    title: "Comptes utilisateur",
                                    icon: <AccountIcon />,
                                    path: "/comptes"
                                },
                                {
                                    title: "Rôles",
                                    icon: <RoleIcon />,
                                    path: "/comptes/roles"
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
