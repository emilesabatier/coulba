import { Outlet } from "@tanstack/react-router"


export function RootLayout() {
    return (
        <div className="min-h-[100dvh] h-full min-w-full w-full bg-background overflow-x-hidden overflow-y-auto grid">
            <Outlet />
        </div>
    )
}
