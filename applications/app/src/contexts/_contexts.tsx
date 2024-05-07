

import { Toaster } from "@coulba/design/overlays"
import { Fragment } from "react"
import { Router } from "../routes/router.provider"
import { CompanyProvider } from "./company/company.provider"
import { CurrentYearProvider } from "./currentYear/currentYear.provider"
import { SessionProvider } from "./session/session.provider"
import { StateProvider } from "./state/state.context"


export function Providers() {
    return (
        <Fragment>
            <Toaster />
            <SessionProvider>
                <CompanyProvider>
                    <CurrentYearProvider>
                        <StateProvider>
                            <Router />
                        </StateProvider>
                    </CurrentYearProvider>
                </CompanyProvider>
            </SessionProvider>
        </Fragment>
    )
}
