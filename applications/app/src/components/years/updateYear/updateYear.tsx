import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation } from "@tanstack/react-query"
import { ReactElement } from "react"
import * as v from "valibot"
import { queryClient } from "../../../contexts/state/queryClient"
import { updateYear } from "../../../services/api/auth/years/updateYear"
import { yearOptions } from "../../../services/api/auth/years/yearsOptions"
import { Update } from "../../layouts/actions/update"
import { UpdateYearForm } from "./updateYear.form"


type UpdateYear = {
    year: v.Output<typeof auth.years.get.return>
    children: ReactElement
}

export function UpdateYear(props: UpdateYear) {

    const mutation = useMutation({
        mutationKey: yearOptions.queryKey,
        mutationFn: updateYear
    })

    return (
        <Update
            triggerElement={props.children}
            title="Modifier l'exercice"
            submitLabel="Modifier"
            defaultValues={props.year}
            onSubmit={async (data) => {
                mutation.mutate({ params: { idYear: props.year.id }, body: data }, {
                    onSuccess: (data) => {
                        queryClient.setQueryData(yearOptions.queryKey, (_data) => _data && data && [data, ..._data.filter((year) => year.id !== data.id)])
                        toast({ title: "Exercice mis à jour", variant: "success" })
                        return true
                    }
                })
                return true
            }}
            validationSchema={auth.years.put.body}
            children={<UpdateYearForm />}
        />
    )
}
