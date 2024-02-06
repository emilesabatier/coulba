'use client'

import { Toaster } from "@monassosportive/design/overlays"
import { SWRProvider } from "./swr.context"
import { Fragment } from "react"
import { SessionProvider } from "./session/session.context"


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