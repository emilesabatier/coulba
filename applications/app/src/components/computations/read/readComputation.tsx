import { auth } from "@coulba/schemas/routes"
import { Link } from "@tanstack/react-router"
import { ComponentProps, ReactElement } from "react"
import * as v from "valibot"


type ReadComputation = {
    idComputation: v.Output<typeof auth.computations.get.return>["id"]
    children: ReactElement
    className?: ComponentProps<'a'>['className']
}

export function ReadComputation(props: ReadComputation) {
    return (
        <Link
            to="/configuration/compte-de-resultat/calculs/$idComputation"
            params={{ idComputation: props.idComputation }}
            className={props.className}
            children={props.children}
        />
    )
}
