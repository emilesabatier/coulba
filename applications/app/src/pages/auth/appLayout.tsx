import { CircularLoader } from "@coulba/design/layouts"
import { Outlet } from "@tanstack/react-router"
import { Page } from "../../components/layouts/page/page"
import { useSession } from "../../contexts/session/useSession"
import { router } from "../../routes/router"


export function AppLayout() {
    const session = useSession()

    if (session.isLoading) return (
        <div id="loading" className="min-w-full w-full max-w-full min-h-full h-full max-h-full overflow-hidden">
            <CircularLoader />
        </div>
    )
    if (!session.user) return null
    if (!session.user.isInvitationValidated && router.parseLocation().pathname !== "/activation") router.navigate({ to: "/activation" })
    return (
        <div id="app" className="min-w-full w-full max-w-full min-h-full h-full max-h-full overflow-hidden">
            <Page.Root>
                <Page.Navigation
                    profile={session.user}
                    session={session}
                />
                <Page.Content>
                    <Outlet />
                </Page.Content>
            </Page.Root>
        </div>
    )
}
