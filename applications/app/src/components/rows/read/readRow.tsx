import { auth } from "@coulba/schemas/routes"
import { Link } from "@tanstack/react-router"
import { ReactElement } from "react"
import * as v from "valibot"


type ReadRow = {
    idRecord: v.Output<typeof auth.records.get.return>["id"]
    idRow: v.Output<typeof auth.rows.get.return>["id"]
    children: ReactElement
}

export function ReadRow(props: ReadRow) {
    return (
        <Link
            to="/ecritures/$idRecord/lignes/$idRow"
            params={{
                idRecord: props.idRecord,
                idRow: props.idRow
            }}
            children={props.children}
        />
    )
}
