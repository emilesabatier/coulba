import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation } from "@tanstack/react-query"
import { ReactElement } from "react"
import * as v from "valibot"
import { queryClient } from "../../../contexts/state/queryClient"
import { router } from "../../../routes/router"
import { deleteStatement } from "../../../services/api/auth/statements/deleteStatement"
import { statementsOptions } from "../../../services/api/auth/statements/statementsOptions"
import { Delete } from "../../layouts/actions/delete"


type DeleteStatement = {
    statement: v.Output<typeof auth.statements.get.return>
    children: ReactElement
}

export function DeleteStatement(props: DeleteStatement) {
    const mutation = useMutation({ mutationFn: deleteStatement })

    return (
        <Delete
            title="Supprimer la ligne ?"
            description="Attention, cela supprimera toutes les données et les sous-lignes associés."
            onSubmit={async () => {
                const response = await mutation.mutateAsync({
                    params: { idStatement: props.statement.id }
                })
                if (!response) return false

                await router.navigate({ to: "/configuration/compte-de-resultat/lignes" })
                await queryClient.invalidateQueries(statementsOptions)
                toast({ title: "Ligne supprimée", variant: "success" })

                return true
            }}
            children={props.children}
        />
    )
}
