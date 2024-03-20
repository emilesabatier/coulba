import { Link } from "@tanstack/react-router"
import { ReactElement } from "react"


type CreateUser = {
    children: ReactElement
}

export function CreateUser(props: CreateUser) {
    return (
        <Link
            to="/configuration/utilisateurs/ajouter"
            children={props.children}
        />
    )
}
