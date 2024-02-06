import { Outlet, createRoute } from "@tanstack/react-router"
import { LessonIcon } from "../../../../components/lesson/lesson.icon"
import { agendaLayout } from "../agenda.layout"


export const lessonsLayout = createRoute({
    getParentRoute: () => agendaLayout,
    beforeLoad: () => ({
        label: "Cours",
        icon: <LessonIcon />,
        subNavigationParent: "/agenda/cours"
    }),
    path: '/cours',
    component: () => <Outlet />
})
