import { createRoute } from "@tanstack/react-router"
import { ValidateEmailPage } from "../../pages/shared/validateEmailPage"
import { sharedLayout } from "./shared.layout"


export const validateEmailRoute = createRoute({
    getParentRoute: () => sharedLayout,
    path: '/email',
    validateSearch: (search: Record<string, unknown>) => {
        return {
            id: String(search.id),
            token: String(search.token)
        }
    },
    component: () => <ValidateEmailPage />
})
