

import { Toaster } from "@coulba/design/overlays"
import { Fragment } from "react"
import { SessionProvider } from "./session/session.context"
import { SWRProvider } from "./swr.context"


export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <Fragment>
            <Toaster />
            <SessionProvider>
                <SWRProvider>
                    {children}
                </SWRProvider>
            </SessionProvider>
        </Fragment>
    )
}
