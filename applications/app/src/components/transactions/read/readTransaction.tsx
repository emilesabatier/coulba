import { auth } from "@coulba/schemas/routes"
import { Link } from "@tanstack/react-router"
import { ReactElement } from "react"
import * as v from "valibot"


type ReadTransaction = {
    transaction: v.Output<typeof auth.transactions.get.return>
    children: ReactElement
}

export function ReadTransaction(props: ReadTransaction) {
    return (
        <Link
            to="/enregistrements/$idTransaction"
            params={{ idTransaction: props.transaction.id }}
            children={props.children}
        />
    )
}
