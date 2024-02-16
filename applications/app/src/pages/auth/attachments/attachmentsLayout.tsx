import { Outlet } from "@tanstack/react-router"
import { Page } from "../../../components/layouts/page/page"
import { Main } from "../../../components/layouts/main/main"


export function AttachmentsLayout() {
    return (
        <Page.Root id="entries">
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
