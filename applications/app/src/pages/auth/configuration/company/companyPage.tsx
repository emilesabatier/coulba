import { CompanyContent } from "../../../../components/company/companyContent"
import { Main } from "../../../../components/layouts/main/main"


export function CompanyPage() {
    return (
        <Main.Root>
            <Main.Header
                title="Société"
                description="Vous retrouvez sur cette page les informations sur votre société."
            />
            <Main.Content>
                <CompanyContent />
            </Main.Content>
        </Main.Root>
    )
}
