import { ButtonOutline } from "@coulba/design/buttons"
import { IconPencil } from "@tabler/icons-react"
import { CompanyData } from "../../../../components/company/companyData"
import { UpdateCompany } from "../../../../components/company/updateCompany/updateCompany"
import { Main } from "../../../../components/layouts/main/main"


export function CompanyPage() {
    return (
        <Main.Root>
            <Main.Header
                title="Société"
                description="Vous retrouvez sur cette page les informations sur votre société."
            />
            <Main.Content>
                <div className="flex flex-col justify-start items-stretch gap-2">
                    <UpdateCompany>
                        <ButtonOutline
                            icon={<IconPencil />}
                            text="Modifier"
                        />
                    </UpdateCompany>
                    <CompanyData />
                </div>
            </Main.Content>
        </Main.Root>
    )
}
