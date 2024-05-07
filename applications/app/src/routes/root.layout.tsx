import { createRootRouteWithContext } from "@tanstack/react-router"
import { SessionContext } from "../contexts/session/session.context"
import { RootLayout } from "../pages/rootLayout"


type MyRouterContext = {
    title?: string
    session: {
        isLoading: SessionContext["isLoading"]
        mutate: SessionContext["mutate"]
        profile: SessionContext["profile"]
        isSignedIn?: SessionContext["isSignedIn"]
    }
}

export const rootLayout = createRootRouteWithContext<MyRouterContext>()({
    component: RootLayout,
})
