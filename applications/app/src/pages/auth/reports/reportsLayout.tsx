import { Outlet } from "@tanstack/react-router"
import { Main } from "../../../components/layouts/main/main"
import { Page } from "../../../components/layouts/page/page"


export function ReportsLayout() {
    return (
        <Page.Root id="reports">
            <Page.Header />
            <Page.Content>
                <Main.Root>
                    <Main.Header />
                    <Main.Content
                        menu={[
                            {
                                menuPath: "/liasse/bilan",
                                navigatePath: "/liasse/bilan",
                                label: "Bilan"
                            },
                            {
                                menuPath: "/liasse/compte-de-resultat",
                                navigatePath: "/liasse/compte-de-resultat",
                                label: "Compte de résultat"
                            },
                            {
                                menuPath: "/liasse/cloture",
                                navigatePath: "/liasse/cloture",
                                label: "Clôture"
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
