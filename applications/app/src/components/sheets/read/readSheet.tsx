import { auth } from "@coulba/schemas/routes"
import { Link } from "@tanstack/react-router"
import { ComponentProps, ReactElement } from "react"
import * as v from "valibot"


type ReadSheet = {
    idSheet: v.Output<typeof auth.sheets.get.return>["id"]
    children: ReactElement
    className?: ComponentProps<'a'>['className']
}

export function ReadSheet(props: ReadSheet) {
    return (
        <Link
            to="/configuration/bilan/$idSheet"
            params={{ idSheet: props.idSheet }}
            className={props.className}
            children={props.children}
        />
    )
}
