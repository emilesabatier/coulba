import { ButtonOutline } from "@coulba/design/buttons"
import { IconPencil } from "@tabler/icons-react"
import { UpdateCompany } from "../../../components/company/updateCompany/updateCompany"
import { Main } from "../../../components/layouts/main/main"
import { CompanyData } from "../../../components/company/companyData"


export function CompanyPage() {
    return (
        <Main.Root>
            <Main.Header
                title="Société"
                description="Vous retrouvez sur cette page les informations sur votre société."
            >
                <UpdateCompany>
                    <ButtonOutline
                        icon={<IconPencil />}
                        text="Modifier"
                    />
                </UpdateCompany>
            </Main.Header>
            <Main.Content>
                <CompanyData />
            </Main.Content>
        </Main.Root>
    )
}
