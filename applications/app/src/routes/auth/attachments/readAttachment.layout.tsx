import { Outlet, createRoute } from "@tanstack/react-router"
import { attachmentsLayout } from "./attachments.layout"


export const readAttachmentLayout = createRoute({
    getParentRoute: () => attachmentsLayout,
    beforeLoad: ({ params }) => ({
        title: params.idAttachment,
        description: undefined
    }),
    path: '/$idAttachment',
    component: () => <Outlet />
})
