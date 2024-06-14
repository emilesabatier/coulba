import { createRoute } from "@tanstack/react-router"
import { Main } from "../components/layout/main/main"
import { LegalText } from "../components/legal/legalText"
import { rootLayout } from "./root.layout"


export const legalRoute = createRoute({
    getParentRoute: () => rootLayout,
    beforeLoad: () => ({
        title: "Mentions légales"
    }),
    path: '/legal',
    component: () => (
        <Main.Root>
            <Main.Header>
                <span className="italic text-neutral/50">Dernière version le 04/05/2024.</span>
            </Main.Header>
            <Main.Content>
                <LegalText />
            </Main.Content>
        </Main.Root>
    )
})
