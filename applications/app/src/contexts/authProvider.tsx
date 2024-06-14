

import { ReactNode } from "@tanstack/react-router"
import { CurrentYearProvider } from "./currentYear/currentYear.provider"
import { OrganizationProvider } from "./organization/organization.provider"
import { StateProvider } from "./state/state.context"


type AuthProvider = {
    children: ReactNode
}

export function AuthProvider(props: AuthProvider) {
    return (
        <OrganizationProvider>
            <CurrentYearProvider>
                <StateProvider>
                    {props.children}
                </StateProvider>
            </CurrentYearProvider>
        </OrganizationProvider>
    )
}
