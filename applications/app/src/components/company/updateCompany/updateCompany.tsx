import { Link } from "@tanstack/react-router"
import { ReactElement } from "react"


type UpdateCompany = {
    children: ReactElement
}

export function UpdateCompany(props: UpdateCompany) {
    return (
        <Link
            to="/configuration/societe/modifier"
            children={props.children}
        />
    )
}
