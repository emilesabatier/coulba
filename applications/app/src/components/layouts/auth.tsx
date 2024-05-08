

import { ReactNode } from "react"
import { useSession } from "../../contexts/session/useSession"
import { Loading } from "./loading"


type RootLayout = {
    dashboard: ReactNode
    connection: ReactNode
}

export function Auth({ dashboard, connection }: RootLayout) {
    const session = useSession()

    if (session.isSignedIn === undefined) return <Loading />
    if (!session.isSignedIn) return connection
    return dashboard
}
