import { Link } from "@tanstack/react-router"
import { ComponentProps, ReactElement } from "react"


type UpdateCompany = {
    children: ReactElement
    className?: ComponentProps<'a'>['className']
}

export function UpdateCompany(props: UpdateCompany) {
    return (
        <Link
            to="/configuration/societe/modifier"
            className={props.className}
            children={props.children}
        />
    )
}
