import { Link } from "@tanstack/react-router"
import { ReactElement } from "react"


type CreateRecord = {
    children: ReactElement
}

export function CreateRecord(props: CreateRecord) {
    return (
        <Link
            to="/ecritures/ajouter"
            children={props.children}
        />
    )
}
