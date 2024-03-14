import { ReactElement } from "react"
import { ConfirmDialog } from "./confirmDialog"


type Delete = {
    children: ReactElement
    title: string
    description?: string
    onSubmit: () => Promise<boolean>
}

export function Delete(props: Delete) {
    return (
        <ConfirmDialog
            title={props.title}
            description={props.description ?? "Attention, les données seront définitivement supprimées."}
            submitLabel="Supprimer"
            color="error"
            onSubmit={props.onSubmit}
        >
            {props.children}
        </ConfirmDialog>
    )
}
