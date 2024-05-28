import { Outlet } from "@tanstack/react-router"
import { Footer } from "../components/layout/footer"
import { Header } from "../components/layout/header"


export function RootLayout() {
    return (
        <div className="min-h-[100dvh] h-full min-w-full w-full overflow-x-hidden overflow-y-auto grid grid-cols-1 grid-rows-[64px_auto_64px]">
            <Header />
            <div className="w-full grow h-full bg-white flex flex-col justify-start items-center p-2">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}
