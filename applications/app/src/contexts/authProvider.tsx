

import { ReactNode } from "@tanstack/react-router"
import { CompanyProvider } from "./company/company.provider"
import { CurrentYearProvider } from "./currentYear/currentYear.provider"
import { StateProvider } from "./state/state.context"


type AuthProvider = {
    children: ReactNode
}

export function AuthProvider(props: AuthProvider) {
    return (
        <CompanyProvider>
            <CurrentYearProvider>
                <StateProvider>
                    {props.children}
                </StateProvider>
            </CurrentYearProvider>
        </CompanyProvider>
    )
}
