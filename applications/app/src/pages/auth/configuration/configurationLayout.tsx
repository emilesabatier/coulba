import { Outlet } from "@tanstack/react-router"
import { Main } from "../../../components/layouts/main/main"
import { Page } from "../../../components/layouts/page/page"


export function ConfigurationLayout() {
    return (
        <Page.Root id="configuration">
            <Page.Header />
            <Page.Content>
                <Main.Root>
                    <Main.Header />
                    <Main.Content
                        menu={[
                            {
                                menuPath: "/configuration/societe",
                                navigatePath: "/configuration/societe",
                                label: "Société"
                            },
                            {
                                menuPath: "/configuration/utilisateurs",
                                navigatePath: "/configuration/utilisateurs",
                                label: "Utilisateurs"
                            },
                            {
                                menuPath: "/configuration/abonnement",
                                navigatePath: "/configuration/abonnement",
                                label: "Abonnement"
                            },
                            {
                                menuPath: "/configuration/api",
                                navigatePath: "/configuration/api",
                                label: "API"
                            },
                            {
                                menuPath: "/configuration/exercices",
                                navigatePath: "/configuration/exercices",
                                label: "Exercices"
                            },
                            {
                                menuPath: "/configuration/journaux",
                                navigatePath: "/configuration/journaux",
                                label: "Journaux comptables"
                            },
                            {
                                menuPath: "/configuration/comptes",
                                navigatePath: "/configuration/comptes",
                                label: "Plan des comptes"
                            }
                        ]}
                    >
                        <Outlet />
                    </Main.Content>
                </Main.Root>
            </Page.Content>
        </Page.Root>
    )
}
