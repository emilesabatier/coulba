import { auth } from "@coulba/schemas/routes"
import { Link } from "@tanstack/react-router"
import { ComponentProps, ReactElement } from "react"
import * as v from "valibot"


type ReadAccountStatement = {
    idStatement: v.Output<typeof auth.accountStatements.get.return>["idStatement"]
    idAccountStatement: v.Output<typeof auth.accountStatements.get.return>["id"]
    className?: ComponentProps<'a'>['className']
    children: ReactElement
}

export function ReadAccountStatement(props: ReadAccountStatement) {
    return (
        <Link
            to="/configuration/compte-de-resultat/postes/$idStatement/comptes/$idAccountStatement"
            params={{
                idStatement: props.idStatement,
                idAccountStatement: props.idAccountStatement
            }}
            className={props.className}
            children={props.children}
        />
    )
}
