import { auth } from "@coulba/schemas/routes"
import { Link } from "@tanstack/react-router"
import { ReactElement } from "react"
import * as v from "valibot"


type UpdateComputation = {
    computation: v.Output<typeof auth.computations.get.return>
    children: ReactElement
}

export function UpdateComputation(props: UpdateComputation) {
    return (
        <Link
            to="/configuration/compte-de-resultat/calculs/$idComputation/modifier"
            params={{ idComputation: props.computation.id }}
            children={props.children}
        />
    )
}
