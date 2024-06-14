import { auth } from "@coulba/schemas/routes"
import { Link } from "@tanstack/react-router"
import { ReactElement } from "react"
import * as v from "valibot"


type CreateRow = {
    record: v.Output<typeof auth.records.get.return>
    children: ReactElement
    isDisabled?: boolean
}

export function CreateRow(props: CreateRow) {
    return (
        <Link
            to="/ecritures/$idRecord/lignes/ajouter"
            params={{ idRecord: props.record.id }}
            children={props.children}
            disabled={props.isDisabled}
        />
    )
}
