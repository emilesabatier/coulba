import { Link } from "@tanstack/react-router"
import { ReactElement } from "react"


type UpdateProfile = {
    children: ReactElement
}

export function UpdateProfile(props: UpdateProfile) {
    return (
        <Link
            to="/profil/modifier"
            children={props.children}
        />
    )
}
