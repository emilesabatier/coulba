import { createRoute } from "@tanstack/react-router"
import { LessonsPage } from "../../../../pages/dashboard/agenda/lesson/lessonsPage"
import { lessonsLayout } from "./lessons.layout"


export const lessonsRoute = createRoute({
    getParentRoute: () => lessonsLayout,
    path: '/',
    component: () => <LessonsPage />
})
