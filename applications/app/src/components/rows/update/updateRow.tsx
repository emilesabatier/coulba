import { auth } from "@coulba/schemas/routes"
import { Link } from "@tanstack/react-router"
import { ReactElement } from "react"
import * as v from "valibot"


type UpdateRow = {
    record: v.Output<typeof auth.records.get.return>
    row: v.Output<typeof auth.rows.get.return>
    children: ReactElement
    isDisabled?: boolean
}

export function UpdateRow(props: UpdateRow) {
    return (
        <Link
            to="/ecritures/$idRecord/lignes/$idRow/modifier"
            params={{
                idRecord: props.record.id,
                idRow: props.row.id
            }}
            children={props.children}
            disabled={props.isDisabled}
        />
    )
}
