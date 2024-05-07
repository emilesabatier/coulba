

import { Toaster } from "@coulba/design/overlays"
import { Fragment } from "react"
import { Router } from "../routes/router.provider"
import { SessionProvider } from "./session/session.provider"


export function RootProvider() {
    return (
        <Fragment>
            <Toaster />
            <SessionProvider>
                <Router />
            </SessionProvider>
        </Fragment>
    )
}
