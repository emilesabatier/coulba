import { Link } from "@tanstack/react-router"
import { ReactElement } from "react"


type CreateAccount = {
    children: ReactElement
}

export function CreateAccount(props: CreateAccount) {
    return (
        <Link
            to="/configuration/comptes/ajouter"
            children={props.children}
        />
    )
}
