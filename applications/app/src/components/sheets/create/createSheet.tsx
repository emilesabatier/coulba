import { Link } from "@tanstack/react-router"
import { ReactElement } from "react"


type CreateSheet = {
    children: ReactElement
}

export function CreateSheet(props: CreateSheet) {
    return (
        <Link
            to="/configuration/bilan/ajouter"
            children={props.children}
        />
    )
}
