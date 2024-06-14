import { Link } from "@tanstack/react-router"
import { ReactElement } from "react"


type CreateComputation = {
    children: ReactElement
}

export function CreateComputation(props: CreateComputation) {
    return (
        <Link
            to="/configuration/compte-de-resultat/calculs/ajouter"
            children={props.children}
        />
    )
}
