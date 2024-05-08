import { auth } from "@coulba/schemas/routes"
import { Link } from "@tanstack/react-router"
import { ReactElement } from "react"
import * as v from "valibot"


type UpdateAccount = {
    account: v.Output<typeof auth.accounts.get.return>
    children: ReactElement
}

export function UpdateAccount(props: UpdateAccount) {
    return (
        <Link
            to="/configuration/comptes/$idAccount/modifier"
            params={{ idAccount: props.account.id }}
            children={props.children}
        />
    )
}
