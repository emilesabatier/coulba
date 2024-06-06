import { Link } from "@tanstack/react-router"
import { ComponentProps, ReactElement } from "react"


type UpdateOrganization = {
    children: ReactElement
    className?: ComponentProps<'a'>['className']
}

export function UpdateOrganization(props: UpdateOrganization) {
    return (
        <Link
            to="/configuration/organisation/modifier"
            className={props.className}
            children={props.children}
        />
    )
}
