import { createRoute } from "@tanstack/react-router"
import { ValidateInvitationPage } from "../../pages/shared/validateInvitationPage"
import { sharedLayout } from "./shared.layout"


export const validateInvitationRoute = createRoute({
    getParentRoute: () => sharedLayout,
    path: '/invitation',
    validateSearch: (search: Record<string, unknown>) => {
        return {
            id: String(search.id),
            token: String(search.token)
        }
    },
    component: () => <ValidateInvitationPage />
})
