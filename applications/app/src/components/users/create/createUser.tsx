import { Link } from "@tanstack/react-router"
import { ComponentProps, ReactElement } from "react"


type CreateUser = {
    children: ReactElement
    className?: ComponentProps<'a'>['className']
}

export function CreateUser(props: CreateUser) {
    return (
        <Link
            to="/configuration/utilisateurs/ajouter"
            className={props.className}
            children={props.children}
        />
    )
}
