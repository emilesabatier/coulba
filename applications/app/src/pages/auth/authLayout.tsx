import { Outlet } from "@tanstack/react-router"
import { Page } from "../../components/layouts/page/page"


export function AuthLayout() {
    return (
        <div id="app" className="min-w-full w-full max-w-full min-h-full h-full max-h-full overflow-hidden">
            <Page.Root>
                <Page.Navigation />
                <Page.Content>
                    <Outlet />
                </Page.Content>
            </Page.Root>
        </div>
    )
}
