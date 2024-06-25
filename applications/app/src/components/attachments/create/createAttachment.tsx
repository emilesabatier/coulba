import { Link } from "@tanstack/react-router"
import { ReactElement } from "react"


type CreateAttachment = {
    children: ReactElement
}

export function CreateAttachment(props: CreateAttachment) {
    return (
        <Link
            className="w-fit"
            to="/stockage/ajouter"
            children={props.children}
        />
    )
}
