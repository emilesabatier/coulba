import { auth } from "@coulba/schemas/routes"
import { Link } from "@tanstack/react-router"
import { ReactElement } from "react"
import * as v from "valibot"


type ReadTransaction = {
    idTransaction: v.Output<typeof auth.transactions.get.return>["id"]
    children: ReactElement
}

export function ReadTransaction(props: ReadTransaction) {
    return (
        <Link
            to="/operations/$idTransaction"
            params={{ idTransaction: props.idTransaction }}
            children={props.children}
        />
    )
}
