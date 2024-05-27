import { auth } from "@coulba/schemas/routes"
import { Link } from "@tanstack/react-router"
import { ReactElement } from "react"
import * as v from "valibot"


type UpdateRecord = {
    transaction: v.Output<typeof auth.transactions.get.return>
    record: v.Output<typeof auth.records.get.return>
    children: ReactElement
}

export function UpdateRecord(props: UpdateRecord) {
    return (
        <Link
            to="/operations/$idTransaction/enregistrements/$idRecord/modifier"
            params={{
                idTransaction: props.transaction.id,
                idRecord: props.record.id
            }}
            children={props.children}
        />
    )
}
