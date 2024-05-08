import { CircularLoader } from "@coulba/design/layouts"
import { Outlet } from "@tanstack/react-router"
import { Page } from "../../components/layouts/page/page"
import { useSession } from "../../contexts/session/useSession"


export function AppLayout() {
    const session = useSession()

    if (session.isLoading) return (
        <div id="loading" className="min-w-full w-full max-w-full min-h-full h-full max-h-full overflow-hidden">
            <CircularLoader />
        </div>
    )
    if (!session.profile) return null
    return (
        <div id="app" className="min-w-full w-full max-w-full min-h-full h-full max-h-full overflow-hidden">
            <Page.Root>
                <Page.Navigation
                    profile={session.profile}
                    session={session}
                />
                <Page.Content>
                    <Outlet />
                </Page.Content>
            </Page.Root>
        </div>
    )
}
