import { auth } from "@coulba/schemas/routes"
import { Link } from "@tanstack/react-router"
import { ReactElement } from "react"
import * as v from "valibot"


type UpdateAccountStatement = {
    accountStatement: v.Output<typeof auth.accountStatements.get.return>
    children: ReactElement
}

export function UpdateAccountStatement(props: UpdateAccountStatement) {
    return (
        <Link
            to="/configuration/compte-de-resultat/lignes/$idStatement/comptes/$idAccountStatement/modifier"
            params={{
                idStatement: props.accountStatement.idStatement,
                idAccountStatement: props.accountStatement.id
            }}
            children={props.children}
        />
    )
}
