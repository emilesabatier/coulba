import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation } from "@tanstack/react-query"
import { ReactElement } from "react"
import * as v from "valibot"
import { queryClient } from "../../../contexts/state/queryClient"
import { router } from "../../../routes/router"
import { computationsOptions } from "../../../services/api/auth/computations/computationsOptions"
import { deleteComputation } from "../../../services/api/auth/computations/deleteComputation"
import { Delete } from "../../layouts/actions/delete"


type DeleteComputation = {
    computation: v.Output<typeof auth.computations.get.return>
    children: ReactElement
}

export function DeleteComputation(props: DeleteComputation) {
    const mutation = useMutation({ mutationFn: deleteComputation })

    return (
        <Delete
            title="Supprimer le calcul ?"
            description="Attention, cela supprimera toutes les données."
            onSubmit={async () => {
                const response = await mutation.mutateAsync({
                    params: { idComputation: props.computation.id }
                })
                if (!response) return false

                queryClient.invalidateQueries({ queryKey: computationsOptions.queryKey })
                router.navigate({ to: "/configuration/compte-de-resultat/calculs" })
                toast({ title: "Calcul supprimé", variant: "success" })

                return true
            }}
            children={props.children}
        />
    )
}
