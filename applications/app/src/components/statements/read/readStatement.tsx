import { auth } from "@coulba/schemas/routes"
import { Link } from "@tanstack/react-router"
import { ComponentProps, ReactElement } from "react"
import * as v from "valibot"


type ReadStatement = {
    idStatement: v.Output<typeof auth.statements.get.return>["id"]
    children: ReactElement
    className?: ComponentProps<'a'>['className']
}

export function ReadStatement(props: ReadStatement) {
    return (
        <Link
            to="/configuration/compte-de-resultat/lignes/$idStatement"
            params={{ idStatement: props.idStatement }}
            className={props.className}
            children={props.children}
        />
    )
}
