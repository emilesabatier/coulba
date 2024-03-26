import { Link } from "@tanstack/react-router"
import { ReactElement } from "react"


type CreateYear = {
    children: ReactElement
}

export function CreateYear(props: CreateYear) {
    return (
        <Link
            to="/configuration/exercices/ajouter"
            children={props.children}
        />
    )
}
