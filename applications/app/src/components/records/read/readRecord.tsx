import { auth } from "@coulba/schemas/routes"
import { Link } from "@tanstack/react-router"
import { ReactElement } from "react"
import * as v from "valibot"


type ReadRecord = {
    idRecord: v.Output<typeof auth.records.get.return>["id"]
    children: ReactElement
}

export function ReadRecord(props: ReadRecord) {
    return (
        <Link
            to="/ecritures/$idRecord"
            params={{ idRecord: props.idRecord }}
            children={props.children}
        />
    )
}
