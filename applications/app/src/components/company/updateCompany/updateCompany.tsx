import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { ReactElement } from "react"
import { useCompany } from "../../../contexts/company/useCompany"
import { updateCompany } from "../../../services/api/auth/companies/updateCompany"
import { Update } from "../../layouts/actions/update"
import { UpdateCompanyForm } from "./updateCompany.form"


type UpdateCompany = {
    children: ReactElement
}

export function UpdateCompany(props: UpdateCompany) {

    const company = useCompany()

    return (
        <Update
            triggerElement={props.children}
            title="Modifier les informations de la société"
            submitLabel="Modifier"
            defaultValues={company.data}
            onSubmit={async (data) => {
                await updateCompany({ body: data })

                company.mutate()

                toast({ title: "Informations de la société mises à jour", variant: "success" })
                return true
            }}
            validationSchema={auth.companies.put.body}
            children={< UpdateCompanyForm />}
        />
    )
}
