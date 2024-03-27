

import { Toaster } from "@coulba/design/overlays"
import { Fragment, ReactNode } from "react"
import { CompanyProvider } from "./company/company.provider"
import { CurrentYearProvider } from "./currentYear/currentYear.provider"
import { ProfileProvider } from "./profile/profile.provider"
import { SessionProvider } from "./session/session.context"
import { StateProvider } from "./state/state.context"


type Providers = {
    children: ReactNode
}
export function Providers(props: Providers) {
    return (
        <Fragment>
            <Toaster />
            <SessionProvider>
                <CompanyProvider>
                    <ProfileProvider>
                        <CurrentYearProvider>
                            <StateProvider>
                                {props.children}
                            </StateProvider>
                        </CurrentYearProvider>
                    </ProfileProvider>
                </CompanyProvider>
            </SessionProvider>
        </Fragment>
    )
}
