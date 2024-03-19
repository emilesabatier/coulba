import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation } from "@tanstack/react-query"
import { ReactElement } from "react"
import * as v from "valibot"
import { queryClient } from "../../../contexts/state/queryClient"
import { updateUser } from "../../../services/api/auth/users/updateUser"
import { userOptions } from "../../../services/api/auth/users/usersOptions"
import { Update } from "../../layouts/actions/update"
import { UpdateUserForm } from "./updateUser.form"


type UpdateUser = {
    user: v.Output<typeof auth.users.get.return>
    children: ReactElement
}

export function UpdateUser(props: UpdateUser) {

    const mutation = useMutation({
        mutationKey: userOptions.queryKey,
        mutationFn: updateUser
    })

    return (
        <Update
            triggerElement={props.children}
            title="Modifier l'accès utilisateur"
            submitLabel="Modifier"
            defaultValues={props.user}
            onSubmit={async (data) => {
                mutation.mutate({ params: { idUser: props.user.id }, body: data }, {
                    onSuccess: (data) => {
                        queryClient.setQueryData(userOptions.queryKey, (_data) => _data && data && [data, ..._data.filter((user) => user.id !== data.id)])
                        toast({ title: "Accès utilisateur mis à jour", variant: "success" })
                        return true
                    }
                })
                return true
            }}
            validationSchema={auth.users.put.body}
            children={<UpdateUserForm />}
        />
    )
}
