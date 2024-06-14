import { auth } from "@coulba/schemas/routes"
import { Link } from "@tanstack/react-router"
import { ReactElement } from "react"
import * as v from "valibot"


type UpdateRecord = {
    record: v.Output<typeof auth.records.get.return>
    children: ReactElement
}

export function UpdateRecord(props: UpdateRecord) {
    return (
        <Link
            to="/ecritures/$idRecord/modifier"
            params={{ idRecord: props.record.id }}
            children={props.children}
        />
    )
}
