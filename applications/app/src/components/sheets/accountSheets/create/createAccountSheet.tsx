import { auth } from "@coulba/schemas/routes"
import { Link } from "@tanstack/react-router"
import { ReactElement } from "react"
import * as v from "valibot"


type CreateAccountSheet = {
    accountSheet: v.Output<typeof auth.accountSheets.get.return>
    children: ReactElement
}

export function CreateAccountSheet(props: CreateAccountSheet) {
    return (
        <Link
            to="/configuration/bilan/$idSheet/ajouter"
            params={{
                idSheet: props.accountSheet.idSheet
            }}
            children={props.children}
        />
    )
}
