import { Link } from "@tanstack/react-router"
import { ReactElement } from "react"


type CreateJournal = {
    children: ReactElement
}

export function CreateJournal(props: CreateJournal) {
    return (
        <Link
            to="/configuration/journaux/ajouter"
            children={props.children}
        />
    )
}
