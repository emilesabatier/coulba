import { auth } from "@coulba/schemas/routes"
import { Link } from "@tanstack/react-router"
import { ComponentProps, ReactElement } from "react"
import * as v from "valibot"


type ReadAccount = {
    idAccount: v.Output<typeof auth.accounts.get.return>["id"]
    className?: ComponentProps<'a'>['className']
    children: ReactElement
}

export function ReadAccount(props: ReadAccount) {
    return (
        <Link
            to="/configuration/comptes/$idAccount"
            params={{ idAccount: props.idAccount }}
            className={props.className}
            children={props.children}
        />
    )
}
