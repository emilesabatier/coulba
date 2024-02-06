import { createRootRouteWithContext } from "@tanstack/react-router"
import { ReactElement } from "react"
import { RootLayout } from "../pages/rootLayout"


type MyRouterContext = {
    label?: string
    icon?: ReactElement
    title?: string
    subNavigationParent?: string
    session: {
        isSignedIn?: boolean
    }
}

export const rootLayout = createRootRouteWithContext<MyRouterContext>()({
    component: RootLayout,
})
