import { ButtonPlain } from "@coulba/design/buttons"
import { FormatLink, FormatText } from "@coulba/design/formats"
import { CircularLoader } from "@coulba/design/layouts"
import { IconPencil } from "@tabler/icons-react"
import { useCompany } from "../../contexts/company/useCompany"
import { DataBlock } from "../layouts/dataBlock/dataBlock"
import { Section } from "../layouts/section/section"
import { UpdateCompany } from "./updateCompany/updateCompany"


export function CompanyContent() {
    const company = useCompany()

    if (company.isLoading) return <CircularLoader className="m-3" />
    if (!company.data) return null
    return (
        <Section.Root>
            <Section.Item>
                <UpdateCompany>
                    <ButtonPlain
                        icon={<IconPencil />}
                        text="Modifier"
                    />
                </UpdateCompany>
            </Section.Item>
            <Section.Item>
                <Section.Title title="Informations" />
            </Section.Item>
            <Section.Item>
                <DataBlock.Root>
                    <DataBlock.Item label="SIREN">
                        <FormatText text={company.data.siren} />
                    </DataBlock.Item>
                    <DataBlock.Item label="Nom">
                        <FormatText text={company.data.name} />
                    </DataBlock.Item>
                    <DataBlock.Item label="Email">
                        <FormatLink text={company.data.email} />
                    </DataBlock.Item>
                </DataBlock.Root>
            </Section.Item>
        </Section.Root>
    )
}
