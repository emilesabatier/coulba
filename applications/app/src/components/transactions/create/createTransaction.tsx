import { Link } from "@tanstack/react-router"
import { ReactElement } from "react"


type CreateTransaction = {
    children: ReactElement
}

export function CreateTransaction(props: CreateTransaction) {
    return (
        <Link
            to="/operations/ajouter"
            children={props.children}
        />
    )
}
