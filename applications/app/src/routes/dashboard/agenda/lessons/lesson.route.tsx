import { createRoute } from "@tanstack/react-router"
import { LessonPage } from "../../../../pages/dashboard/agenda/lesson/lessonPage"
import { lessonsLayout } from "./lessons.layout"


export const lessonRoute = createRoute({
    getParentRoute: () => lessonsLayout,
    path: '/$idLesson',
    component: () => <LessonPage />,
    loader: async ({ params: { idLesson } }) => {
        return { idLesson: idLesson }
    }
})
