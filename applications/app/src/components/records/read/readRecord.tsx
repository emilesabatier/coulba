import { auth } from "@coulba/schemas/routes"
import { Link } from "@tanstack/react-router"
import { ReactElement } from "react"
import * as v from "valibot"


type ReadRecord = {
    idTransaction: v.Output<typeof auth.transactions.get.return>["id"]
    idRecord: v.Output<typeof auth.records.get.return>["id"]
    children: ReactElement
}

export function ReadRecord(props: ReadRecord) {
    return (
        <Link
            to="/operations/$idTransaction/enregistrements/$idRecord"
            params={{
                idTransaction: props.idTransaction,
                idRecord: props.idRecord
            }}
            children={props.children}
        />
    )
}
