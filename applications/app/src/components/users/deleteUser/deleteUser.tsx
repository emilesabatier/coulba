import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation } from "@tanstack/react-query"
import { ReactElement } from "react"
import * as v from "valibot"
import { queryClient } from "../../../contexts/state/queryClient"
import { deleteUser } from "../../../services/api/auth/users/deleteUser"
import { userOptions } from "../../../services/api/auth/users/usersOptions"
import { Delete } from "../../layouts/actions/delete"


type DeleteUser = {
    user: v.Output<typeof auth.users.get.return>
    children: ReactElement
}

export function DeleteUser(props: DeleteUser) {

    const mutation = useMutation({
        mutationKey: userOptions.queryKey,
        mutationFn: deleteUser
    })

    return (
        <Delete
            title="Supprimer l'accès utilisateur ?"
            description="Attention, cela supprimera toutes les données."
            onSubmit={async () => {
                mutation.mutate({ params: { idUser: props.user.id } }, {
                    onSuccess: (data) => {
                        queryClient.setQueryData(userOptions.queryKey, (_data) => _data?.filter((user) => user.id !== data?.id))
                        toast({ title: "Accès utilisateur supprimé", variant: "success" })
                        return true
                    }
                })
                return true
            }}
            children={props.children}
        />
    )
}
