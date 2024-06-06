import { Outlet, createRootRouteWithContext, useRouter } from "@tanstack/react-router"
import { useEffect } from "react"
import { SessionContext } from "../contexts/session/session.context"


type RouterContext = {
    title?: string
    description?: string
    session: {
        isLoading: SessionContext["isLoading"]
        mutate: SessionContext["mutate"]
        profile: SessionContext["profile"]
        isSignedIn: SessionContext["isSignedIn"]
    }
}

export const rootLayout = createRootRouteWithContext<RouterContext>()({
    component: () => {

        const router = useRouter()

        const matchWithTitle = [...router.state.matches]
            .reverse()
            .find((d) => d.context?.title)

        const title = matchWithTitle?.context?.title || 'Coulba'

        useEffect(() => { document.title = title }, [title])

        return (
            <div className="w-full h-full overflow-auto">
                <Outlet />
            </div>
        )
    }
})
