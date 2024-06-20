import { auth } from "@coulba/schemas/routes"
import { Link } from "@tanstack/react-router"
import { ReactElement } from "react"
import * as v from "valibot"


type CreateAccountStatement = {
    statement: v.Output<typeof auth.statements.get.return>
    children: ReactElement
}

export function CreateAccountStatement(props: CreateAccountStatement) {
    return (
        <Link
            to="/configuration/compte-de-resultat/postes/$idStatement/comptes/ajouter"
            params={{
                idStatement: props.statement.id
            }}
            children={props.children}
        />
    )
}
