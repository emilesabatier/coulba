import { auth } from "@coulba/schemas/routes"
import { Link } from "@tanstack/react-router"
import { ReactElement } from "react"
import * as v from "valibot"


type ReadAttachment = {
    attachment: v.Output<typeof auth.attachments.get.return>
    children: ReactElement
}

export function ReadAttachment(props: ReadAttachment) {
    return (
        <Link
            to="/fichiers/$idAttachment"
            params={{ idAttachment: props.attachment.id }}
            children={props.children}
        />
    )
}
