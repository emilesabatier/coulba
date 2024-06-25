import { auth } from "@coulba/schemas/routes"
import { Link } from "@tanstack/react-router"
import { ReactElement } from "react"
import * as v from "valibot"


type UpdateAttachment = {
    attachment: v.Output<typeof auth.attachments.get.return>
    children: ReactElement
}

export function UpdateAttachment(props: UpdateAttachment) {
    return (
        <Link
            to="/stockage/$idAttachment/modifier"
            params={{ idAttachment: props.attachment.id }}
            children={props.children}
        />
    )
}
