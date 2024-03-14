import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation } from "@tanstack/react-query"
import { ReactElement } from "react"
import { queryClient } from "../../../contexts/state/queryClient"
import { createYear } from "../../../services/api/auth/years/createYear"
import { yearOptions } from "../../../services/api/auth/years/yearsOptions"
import { Create } from "../../layouts/actions/create"
import { CreateYearForm } from "./createYear.form"



type CreateYear = {
    children: ReactElement
}

export function CreateYear(props: CreateYear) {

    const mutation = useMutation({
        mutationKey: yearOptions.queryKey,
        mutationFn: createYear
    })

    return (
        <Create
            triggerElement={props.children}
            title="Ajouter un exercice"
            submitLabel="Ajouter"
            defaultValues={{}}
            onSubmit={async (data) => {
                mutation.mutate({ body: data }, {
                    onSuccess: (data) => {
                        queryClient.setQueryData(yearOptions.queryKey, (_data) => _data && data && [data, ..._data])
                        toast({ title: "Nouvel exercice ajouté", variant: "success" })
                        return true
                    }
                })
                return true
            }}
            validationSchema={auth.years.post.body}
            children={<CreateYearForm />}
        />
    )
}
