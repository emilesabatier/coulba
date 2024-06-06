import { CircularLoader } from "@coulba/design/layouts"
import { createRoute } from "@tanstack/react-router"
import { UnauthLayout } from "../../components/layouts/unauthLayout"
import { rootLayout } from "../root.layout"


export const unauthLayout = createRoute({
    getParentRoute: () => rootLayout,
    id: 'unauthLayout',
    beforeLoad: () => ({
        title: "Coulba",
        description: undefined
    }),
    pendingComponent: () => <CircularLoader />,
    component: () => (
        <UnauthLayout />
    )
})
