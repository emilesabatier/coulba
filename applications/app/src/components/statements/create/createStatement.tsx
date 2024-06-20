import { Link } from "@tanstack/react-router"
import { ReactElement } from "react"


type CreateStatement = {
    children: ReactElement
}

export function CreateStatement(props: CreateStatement) {
    return (
        <Link
            to="/configuration/compte-de-resultat/postes/ajouter"
            children={props.children}
        />
    )
}
