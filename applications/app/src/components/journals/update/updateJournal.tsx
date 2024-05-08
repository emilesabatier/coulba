import { auth } from "@coulba/schemas/routes"
import { Link } from "@tanstack/react-router"
import { ReactElement } from "react"
import * as v from "valibot"


type UpdateJournal = {
    journal: v.Output<typeof auth.journals.get.return>
    children: ReactElement
}

export function UpdateJournal(props: UpdateJournal) {
    return (
        <Link
            to="/configuration/journaux/$idJournal/modifier"
            params={{ idJournal: props.journal.id }}
            children={props.children}
        />
    )
}
