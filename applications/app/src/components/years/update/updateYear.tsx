import { auth } from "@coulba/schemas/routes"
import { Link } from "@tanstack/react-router"
import { ReactElement } from "react"
import * as v from "valibot"


type UpdateYear = {
    year: v.Output<typeof auth.years.get.return>
    children: ReactElement
}

export function UpdateYear(props: UpdateYear) {
    return (
        <Link
            to="/configuration/exercices/$idYear/modifier"
            params={{ idYear: props.year.id }}
            children={props.children}
        />
    )
}
