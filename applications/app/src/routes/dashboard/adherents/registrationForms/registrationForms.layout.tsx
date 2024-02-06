import { Outlet, createRoute } from "@tanstack/react-router"
import { RegistrationIcon } from "../../../../components/registration/registration.icon"
import { adherentsLayout } from "../adherents.layout"


export const registrationFormsLayout = createRoute({
    getParentRoute: () => adherentsLayout,
    beforeLoad: () => ({
        label: "Préinscriptions",
        icon: <RegistrationIcon />,
        subNavigationParent: "/adherents/preinscriptions"
    }),
    path: '/preinscriptions',
    component: () => <Outlet />
})
