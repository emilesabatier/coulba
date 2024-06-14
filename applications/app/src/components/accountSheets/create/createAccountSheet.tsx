import { auth } from "@coulba/schemas/routes"
import { Link } from "@tanstack/react-router"
import { ReactElement } from "react"
import * as v from "valibot"


type CreateAccountSheet = {
    sheet: v.Output<typeof auth.sheets.get.return>
    children: ReactElement
}

export function CreateAccountSheet(props: CreateAccountSheet) {
    return (
        <Link
            to="/configuration/bilan/$idSheet/comptes/ajouter"
            params={{
                idSheet: props.sheet.id
            }}
            children={props.children}
        />
    )
}
