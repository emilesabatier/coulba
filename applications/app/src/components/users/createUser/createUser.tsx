import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation } from "@tanstack/react-query"
import { ReactElement } from "react"
import { queryClient } from "../../../contexts/state/queryClient"
import { createUser } from "../../../services/api/auth/users/createUser"
import { userOptions } from "../../../services/api/auth/users/usersOptions"
import { Create } from "../../layouts/actions/create"
import { CreateUserForm } from "./createUser.form"



type CreateUser = {
    children: ReactElement
}

export function CreateUser(props: CreateUser) {

    const mutation = useMutation({
        mutationKey: userOptions.queryKey,
        mutationFn: createUser
    })

    return (
        <Create
            triggerElement={props.children}
            title="Ajouter un accès utilisateur"
            submitLabel="Ajouter"
            defaultValues={{}}
            onSubmit={async (data) => {
                mutation.mutate({ body: data }, {
                    onSuccess: (data) => {
                        queryClient.setQueryData(userOptions.queryKey, (_data) => _data && data && [data, ..._data])
                        toast({ title: "Nouvel accès utilisateur ajouté", variant: "success" })
                        return true
                    }
                })
                return true
            }}
            validationSchema={auth.users.post.body}
            children={<CreateUserForm />}
        />
    )
}
