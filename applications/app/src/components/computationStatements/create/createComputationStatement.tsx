import { auth } from "@coulba/schemas/routes"
import { Link } from "@tanstack/react-router"
import { ReactElement } from "react"
import * as v from "valibot"


type CreateComputationStatement = {
    computation: v.Output<typeof auth.computations.get.return>
    children: ReactElement
}

export function CreateComputationStatement(props: CreateComputationStatement) {
    return (
        <Link
            to="/configuration/compte-de-resultat/calculs/$idComputation/postes/ajouter"
            params={{
                idComputation: props.computation.id
            }}
            children={props.children}
        />
    )
}
