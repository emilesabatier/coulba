import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation } from "@tanstack/react-query"
import { ReactElement } from "react"
import * as v from "valibot"
import { queryClient } from "../../../contexts/state/queryClient"
import { computationsOptions } from "../../../services/api/auth/computations/computationsOptions"
import { deleteComputation } from "../../../services/api/auth/computations/deleteComputation"
import { Delete } from "../../layouts/actions/delete"


type DeleteComputation = {
    computation: v.Output<typeof auth.computations.get.return>
    children: ReactElement
}

export function DeleteComputation(props: DeleteComputation) {

    const mutation = useMutation({
        mutationKey: computationsOptions.queryKey,
        mutationFn: deleteComputation
    })

    return (
        <Delete
            title="Supprimer le calcul ?"
            description="Attention, cela supprimera toutes les données."
            onSubmit={async () => {
                mutation.mutate({ params: { idComputation: props.computation.id } }, {
                    onSuccess: () => {
                        queryClient.invalidateQueries()
                        toast({ title: "Calcul supprimé", variant: "success" })
                    }
                })
                return true
            }}
            children={props.children}
        />
    )
}
