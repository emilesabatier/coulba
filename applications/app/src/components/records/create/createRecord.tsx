import { auth } from "@coulba/schemas/routes"
import { Link } from "@tanstack/react-router"
import { ReactElement } from "react"
import * as v from "valibot"


type CreateRecord = {
    transaction: v.Output<typeof auth.transactions.get.return>
    children: ReactElement
}

export function CreateRecord(props: CreateRecord) {
    return (
        <Link
            to="/operations/$idTransaction/enregistrements/ajouter"
            params={{ idTransaction: props.transaction.id }}
            children={props.children}
        />
    )
}
