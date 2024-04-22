import { Link } from "@tanstack/react-router"
import { ReactElement } from "react"


type UpdateProfileEmail = {
    children: ReactElement
}

export function UpdateProfileEmail(props: UpdateProfileEmail) {
    return (
        <Link
            to="/profil/modifier/email"
            children={props.children}
        />
    )
}
