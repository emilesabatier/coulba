import { auth } from "@coulba/schemas/routes"
import { Link } from "@tanstack/react-router"
import { ReactElement } from "react"
import * as v from "valibot"


type ReadAttachment = {
    idAttachment: v.Output<typeof auth.attachments.get.return>["id"]
    children: ReactElement
}

export function ReadAttachment(props: ReadAttachment) {
    return (
        <Link
            to="/stockage/$idAttachment"
            params={{ idAttachment: props.idAttachment }}
            children={props.children}
        />
    )
}
