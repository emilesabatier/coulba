import { Outlet } from "@tanstack/react-router"


export function AuthLayout() {
    return (
        <div id="app" className="min-w-full w-full max-w-full min-h-full h-full max-h-full overflow-hidden">
            <Outlet />
        </div>
    )
}
