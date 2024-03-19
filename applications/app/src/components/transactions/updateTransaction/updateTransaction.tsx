import { auth } from "@coulba/schemas/routes"
import { Link } from "@tanstack/react-router"
import { ReactElement } from "react"
import * as v from "valibot"


type UpdateTransaction = {
    transaction: v.Output<typeof auth.transactions.get.return>
    children: ReactElement
}

export function UpdateTransaction(props: UpdateTransaction) {
    return (
        <Link
            to="/enregistrements/modifier/$idTransaction"
            params={{ idTransaction: props.transaction.id }}
            children={props.children}
        />
    )
}
