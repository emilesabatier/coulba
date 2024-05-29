import { auth } from "@coulba/schemas/routes"
import { Link } from "@tanstack/react-router"
import { ReactElement } from "react"
import * as v from "valibot"


type UpdateAccountSheet = {
    accountSheet: v.Output<typeof auth.accountSheets.get.return>
    children: ReactElement
}

export function UpdateAccountSheet(props: UpdateAccountSheet) {
    return (
        <Link
            to="/configuration/comptes/$idAccountSheet/modifier"
            params={{ idAccountSheet: props.accountSheet.id }}
            children={props.children}
        />
    )
}
