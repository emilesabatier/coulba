import { CircularLoader } from "@coulba/design/layouts"
import { createRoute } from "@tanstack/react-router"
import { authLayout } from "../auth.layout"
import { ConfigurationLayout } from "../../../pages/auth/configuration/configurationLayout"


export const configurationLayout = createRoute({
    getParentRoute: () => authLayout,
    path: '/configuration',
    pendingComponent: () => <CircularLoader />,
    component: () => <ConfigurationLayout />
})
