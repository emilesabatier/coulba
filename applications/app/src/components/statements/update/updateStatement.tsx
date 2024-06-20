import { auth } from "@coulba/schemas/routes"
import { Link } from "@tanstack/react-router"
import { ReactElement } from "react"
import * as v from "valibot"


type UpdateStatement = {
    statement: v.Output<typeof auth.statements.get.return>
    children: ReactElement
}

export function UpdateStatement(props: UpdateStatement) {
    return (
        <Link
            to="/configuration/compte-de-resultat/postes/$idStatement/modifier"
            params={{ idStatement: props.statement.id }}
            children={props.children}
        />
    )
}
