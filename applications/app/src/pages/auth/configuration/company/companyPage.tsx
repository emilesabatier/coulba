import { CompanyData } from "../../../../components/company/companyData"
import { Main } from "../../../../components/layouts/main/main"


export function CompanyPage() {
    return (
        <Main.Root>
            <Main.Header
                title="Société"
                description="Vous retrouvez sur cette page les informations sur votre société."
            />
            <Main.Content>
                <CompanyData />
            </Main.Content>
        </Main.Root>
    )
}
