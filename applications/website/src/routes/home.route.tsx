import { createRoute } from "@tanstack/react-router"
import { HomePage } from "../pages/homePage"
import { rootLayout } from "./root.layout"


export const homeRoute = createRoute({
    getParentRoute: () => rootLayout,
    path: '/',
    component: () => <HomePage />
})
