import { createRoute } from "@tanstack/react-router"
import { Features } from "../components/home/features"
import { HeroHeader } from "../components/home/heroHeader"
import { Main } from "../components/layout/main/main"
import { rootLayout } from "./root.layout"


export const homeRoute = createRoute({
    getParentRoute: () => rootLayout,
    beforeLoad: () => ({
        title: "Coulba, le logiciel de comptabilité pour ceux qui veulent la comprendre"
    }),
    path: '/',
    component: () => (
        <Main.Root>
            <Main.Content>
                <HeroHeader />
                <Features />
            </Main.Content>
        </Main.Root>
    )
})
