import { auth } from "@coulba/schemas/routes"
import { Link } from "@tanstack/react-router"
import { ReactElement } from "react"
import * as v from "valibot"


type UpdateSheet = {
    sheet: v.Output<typeof auth.sheets.get.return>
    children: ReactElement
}

export function UpdateSheet(props: UpdateSheet) {
    return (
        <Link
            to="/configuration/bilan/$idSheet/modifier"
            params={{ idSheet: props.sheet.id }}
            children={props.children}
        />
    )
}
