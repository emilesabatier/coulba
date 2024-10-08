import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation } from "@tanstack/react-query"
import { ReactElement } from "react"
import * as v from "valibot"
import { queryClient } from "../../../contexts/state/queryClient"
import { deleteYear } from "../../../services/api/auth/years/deleteYear"
import { yearsOptions } from "../../../services/api/auth/years/yearsOptions"
import { Delete } from "../../layouts/actions/delete"


type DeleteYear = {
    year: v.Output<typeof auth.years.get.return>
    children: ReactElement
}

export function DeleteYear(props: DeleteYear) {
    const mutation = useMutation({ mutationFn: deleteYear })

    return (
        <Delete
            title="Supprimer l'exercice ?"
            description="Attention, cela supprimera toutes les données."
            onSubmit={async () => {
                const response = await mutation.mutateAsync({
                    params: { idYear: props.year.id }
                })
                if (!response) return false

                await queryClient.invalidateQueries(yearsOptions)
                toast({ title: "Exercice supprimé", variant: "success" })

                return true
            }}
            children={props.children}
        />
    )
}
