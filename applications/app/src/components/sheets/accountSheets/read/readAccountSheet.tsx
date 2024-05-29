import { auth } from "@coulba/schemas/routes"
import { Link } from "@tanstack/react-router"
import { ComponentProps, ReactElement } from "react"
import * as v from "valibot"


type ReadAccountSheet = {
    idAccountSheet: v.Output<typeof auth.accountSheets.get.return>["id"]
    className?: ComponentProps<'a'>['className']
    children: ReactElement
}

export function ReadAccountSheet(props: ReadAccountSheet) {
    return (
        <Link
            to="/configuration/comptes/$idAccountSheet"
            params={{ idAccountSheet: props.idAccountSheet }}
            className={props.className}
            children={props.children}
        />
    )
}
