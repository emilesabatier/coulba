import { createRootRouteWithContext } from "@tanstack/react-router"
import { RootLayout } from "../pages/rootLayout"


type MyRouterContext = {
    title?: string
    session: {
        isSignedIn?: boolean
    }
}

export const rootLayout = createRootRouteWithContext<MyRouterContext>()({
    component: RootLayout,
})
