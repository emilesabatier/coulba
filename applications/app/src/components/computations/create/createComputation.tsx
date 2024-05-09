import { Link } from "@tanstack/react-router"
import { ReactElement } from "react"


type CreateComputation = {
    children: ReactElement
}

export function CreateComputation(props: CreateComputation) {
    return (
        <Link
            to="/configuration/compte-de-resultat/operations/ajouter"
            children={props.children}
        />
    )
}
