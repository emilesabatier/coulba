import { Outlet } from "@tanstack/react-router"
import { Main } from "../../../components/layouts/main/main"
import { Page } from "../../../components/layouts/page/page"


export function RecordsLayout() {
    return (
        <Page.Root id="records">
            <Page.Header />
            <Page.Content>
                <Main.Root>
                    <Main.Header />
                    <Main.Content
                        menu={[
                            {
                                menuPath: "/livres/journal/",
                                navigatePath: "/livres/journal",
                                label: "Journal"
                            },
                            {
                                menuPath: "/livres/grand-livre",
                                navigatePath: "/livres/grand-livre",
                                label: "Grand Livre"
                            },
                            {
                                menuPath: "/livres/balance",
                                navigatePath: "/livres/balance",
                                label: "Balance"
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
