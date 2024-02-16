import { Outlet } from "@tanstack/react-router"
import { Main } from "../../../components/layouts/main/main"
import { Page } from "../../../components/layouts/page/page"


export function ProfileLayout() {
    return (
        <Page.Root id="profile">
            <Page.Header />
            <Page.Content>
                <Main.Root>
                    <Main.Header />
                    <Main.Content>
                        <Outlet />
                    </Main.Content>
                </Main.Root>
            </Page.Content>
        </Page.Root>
    )
}
