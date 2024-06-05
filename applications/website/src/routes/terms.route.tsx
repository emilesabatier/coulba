import { createRoute } from "@tanstack/react-router"
import { Main } from "../components/layout/main/main"
import { TermsText } from "../components/terms/termsText"
import { rootLayout } from "./root.layout"


export const termsRoute = createRoute({
    getParentRoute: () => rootLayout,
    beforeLoad: () => ({
        title: "CGUV"
    }),
    path: '/cguv',
    component: () => (
        <Main.Root>
            <Main.Header>
                <span className="italic text-neutral/50">Dernière version le 04/05/2024.</span>
            </Main.Header>
            <Main.Content>
                <TermsText />
            </Main.Content>
        </Main.Root>
    )
})
