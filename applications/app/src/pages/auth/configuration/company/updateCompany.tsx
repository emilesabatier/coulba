import { UpdateCompanyForm } from "../../../../components/company/updateCompany/updateCompany.form"
import { Main } from "../../../../components/layouts/main/main"


export function UpdateCompanyPage() {
    return (
        <Main.Root>
            <Main.Header
                title="Modifier les données de la société"
                description="Remplir le formulaire et valider pour modifier les données de la société."
            />
            <UpdateCompanyForm />
        </Main.Root>
    )
}
