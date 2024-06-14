import { auth } from "@coulba/schemas/routes"
import { Link } from "@tanstack/react-router"
import { ComponentProps, ReactElement } from "react"
import * as v from "valibot"


type ReadComputationStatement = {
    idComputation: v.Output<typeof auth.computationStatements.get.return>["idComputation"]
    idComputationStatement: v.Output<typeof auth.computationStatements.get.return>["id"]
    className?: ComponentProps<'a'>['className']
    children: ReactElement
}

export function ReadComputationStatement(props: ReadComputationStatement) {
    return (
        <Link
            to="/configuration/compte-de-resultat/calculs/$idComputation/lignes/$idComputationStatement"
            params={{
                idComputation: props.idComputation,
                idComputationStatement: props.idComputationStatement
            }}
            className={props.className}
            children={props.children}
        />
    )
}
