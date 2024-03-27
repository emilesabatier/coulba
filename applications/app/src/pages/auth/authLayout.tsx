import { CircularLoader } from "@coulba/design/layouts"
import { Outlet } from "@tanstack/react-router"
import { Page } from "../../components/layouts/page/page"
import { useProfile } from "../../contexts/profile/useProfile"
import { useSession } from "../../contexts/session/useSession"


export function AuthLayout() {
    const profile = useProfile()
    const session = useSession()

    if (profile.isLoading) return (
        <div id="loading" className="min-w-full w-full max-w-full min-h-full h-full max-h-full overflow-hidden">
            <CircularLoader />
        </div>
    )
    if (!profile.data) return null
    return (
        <div id="app" className="min-w-full w-full max-w-full min-h-full h-full max-h-full overflow-hidden">
            <Page.Root>
                <Page.Navigation
                    profile={profile.data}
                    session={session}
                />
                <Page.Content>
                    <Outlet />
                </Page.Content>
            </Page.Root>
        </div>
    )
}
