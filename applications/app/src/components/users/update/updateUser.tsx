import { auth } from "@coulba/schemas/routes"
import { Link } from "@tanstack/react-router"
import { ReactElement } from "react"
import * as v from "valibot"


type UpdateUser = {
    user: v.Output<typeof auth.users.get.return>
    children: ReactElement
}

export function UpdateUser(props: UpdateUser) {
    return (
        <Link
            to="/configuration/utilisateurs/$idUser/modifier"
            params={{ idUser: props.user.id }}
            children={props.children}
        />
    )
}
