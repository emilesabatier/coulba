import { Outlet, createRootRouteWithContext } from "@tanstack/react-router"
import { Footer } from "../components/layout/footer"
import { Header } from "../components/layout/header"


type RouterContext = {
    title: string
}

export const rootLayout = createRootRouteWithContext<RouterContext>()({
    beforeLoad: () => ({
        title: "Accueil"
    }),
    component: () => {
        return (
            <div className="relative min-h-[100dvh] h-full min-w-full w-full overflow-x-hidden overflow-y-auto grid grid-cols-1 grid-rows-[64px_auto_64px]">
                <Header />
                <Outlet />
                <Footer />
            </div>
        )
    }
})
