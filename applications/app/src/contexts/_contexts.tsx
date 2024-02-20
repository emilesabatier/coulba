

import { Toaster } from "@coulba/design/overlays"
import { Fragment, ReactNode } from "react"
import { SessionProvider } from "./session/session.context"
import { StateProvider } from "./state.context"


type Providers = {
    children: ReactNode
}
export function Providers(props: Providers) {
    return (
        <Fragment>
            <Toaster />
            <SessionProvider>
                <StateProvider>
                    {props.children}
                </StateProvider>
            </SessionProvider>
        </Fragment>
    )
}
