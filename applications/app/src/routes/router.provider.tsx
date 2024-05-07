import { RouterProvider } from "@tanstack/react-router"
import { useSession } from "../contexts/session/useSession"
import { router } from "./router"


export function Router() {
    const session = useSession()
    return (
        <RouterProvider
            router={router}
            context={{
                session: session
            }}
        />
    )
}
