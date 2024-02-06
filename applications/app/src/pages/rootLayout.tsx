import { Outlet, useRouter } from "@tanstack/react-router"
import { useEffect } from "react"


export function RootLayout() {

    const router = useRouter()

    const matchWithTitle = [...router.state.matches]
        .reverse()
        .find((d) => d.context.title)

    const title = matchWithTitle?.context.title || 'MonAssoSportive'

    useEffect(() => { document.title = title }, [title])

    return (
        <div className="w-full h-full bg-background overflow-auto">
            <Outlet />
        </div>
    )
}
