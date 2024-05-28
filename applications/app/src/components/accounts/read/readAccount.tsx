import { auth } from "@coulba/schemas/routes"
import { Link } from "@tanstack/react-router"
import { ReactElement } from "react"
import * as v from "valibot"


type ReadAccount = {
    idAccount: v.Output<typeof auth.accounts.get.return>["id"]
    children: ReactElement
}

export function ReadAccount(props: ReadAccount) {
    return (
        <Link
            to="/configuration/comptes/$idAccount"
            params={{ idAccount: props.idAccount }}
            children={props.children}
        />
    )
}
