import { auth } from "@coulba/schemas/routes"
import { Link } from "@tanstack/react-router"
import { ReactElement } from "react"
import * as v from "valibot"


type UpdateComputationStatement = {
    computationStatement: v.Output<typeof auth.computationStatements.get.return>
    children: ReactElement
}

export function UpdateComputationStatement(props: UpdateComputationStatement) {
    return (
        <Link
            to="/configuration/compte-de-resultat/calculs/$idComputation/lignes/$idComputationStatement/modifier"
            params={{
                idComputation: props.computationStatement.idComputation,
                idComputationStatement: props.computationStatement.id
            }}
            children={props.children}
        />
    )
}
