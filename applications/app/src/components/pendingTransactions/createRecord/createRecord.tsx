import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation } from "@tanstack/react-query"
import { ReactElement } from "react"
import { createRecord } from "../../../services/api/auth/records/createRecord"
import { Create } from "../../layouts/actions/create"
import { CreateRecordForm } from "./createRecord.form"



type CreateRecord = {
    children: ReactElement
}

export function CreateRecord(props: CreateRecord) {
    const mutation = useMutation({
        mutationFn: createRecord,
        onSuccess: () => {
            toast({ title: "Nouvel enregistrement ajouté", variant: "success" })
            return true
        }
    })

    return (
        <Create
            triggerElement={props.children}
            title="Ajouter un enregistrement"
            submitLabel="Ajouter"
            defaultValues={{}}
            onSubmit={async (data) => {
                mutation.mutate({ body: data })
                return true
            }}
            validationSchema={auth.records.post.body}
            children={<CreateRecordForm />}
        />
    )
}
