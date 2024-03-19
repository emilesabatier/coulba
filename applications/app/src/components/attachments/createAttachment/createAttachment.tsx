import { Link } from "@tanstack/react-router"
import { ReactElement } from "react"


type CreateAttachment = {
    children: ReactElement
}

export function CreateAttachment(props: CreateAttachment) {
    return (
        <Link
            to="/fichiers/ajouter"
            children={props.children}
        />
    )
}
