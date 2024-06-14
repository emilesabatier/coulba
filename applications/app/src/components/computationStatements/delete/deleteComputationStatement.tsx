import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation } from "@tanstack/react-query"
import { ReactElement } from "react"
import * as v from "valibot"
import { queryClient } from "../../../contexts/state/queryClient"
import { router } from "../../../routes/router"
import { computationStatementsOptions } from "../../../services/api/auth/computationStatements/computationStatementsOptions"
import { deleteComputationStatement } from "../../../services/api/auth/computationStatements/deleteComputationStatement"
import { Delete } from "../../layouts/actions/delete"


type DeleteComputationStatement = {
    computationStatement: v.Output<typeof auth.computationStatements.get.return>
    children: ReactElement
}

export function DeleteComputationStatement(props: DeleteComputationStatement) {
    const mutation = useMutation({ mutationFn: deleteComputationStatement })

    return (
        <Delete
            title="Supprimer ?"
            description="Attention, cela supprimera toutes les données."
            onSubmit={async () => {
                const response = await mutation.mutateAsync({
                    params: { idComputationStatement: props.computationStatement.id }
                })
                if (!response) return false

                queryClient.invalidateQueries({ queryKey: computationStatementsOptions.queryKey })
                router.navigate({
                    to: "/configuration/compte-de-resultat/calculs/$idComputation",
                    params: { idComputation: props.computationStatement.idComputation }
                })
                toast({ title: "Données supprimées", variant: "success" })

                return true
            }}
            children={props.children}
        />
    )
}
