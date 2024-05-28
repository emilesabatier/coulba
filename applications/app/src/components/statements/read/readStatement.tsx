import { auth } from "@coulba/schemas/routes"
import { Link } from "@tanstack/react-router"
import { ReactElement } from "react"
import * as v from "valibot"


type ReadStatement = {
    idStatement: v.Output<typeof auth.statements.get.return>["id"]
    children: ReactElement
}

export function ReadStatement(props: ReadStatement) {
    return (
        <Link
            to="/configuration/compte-de-resultat/$idStatement"
            params={{ idStatement: props.idStatement }}
            children={props.children}
        />
    )
}
