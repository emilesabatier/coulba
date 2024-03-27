import { Link } from "@tanstack/react-router"
import { ReactElement } from "react"


type UpdateProfilePassword = {
    children: ReactElement
}

export function UpdateProfilePassword(props: UpdateProfilePassword) {
    return (
        <Link
            to="/profil/modifier/motdepasse"
            children={props.children}
        />
    )
}
