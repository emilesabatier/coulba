import { ButtonOutline } from "@coulba/design/buttons"
import { FormatLink, FormatText } from "@coulba/design/formats"
import { CircularLoader } from "@coulba/design/layouts"
import { IconPencil } from "@tabler/icons-react"
import { useCompany } from "../../contexts/company/useCompany"
import { DataBlock } from "../layouts/dataBlock/dataBlock"
import { UpdateCompany } from "./updateCompany/updateCompany"


export function CompanyContent() {
    const company = useCompany()

    if (company.isLoading) return <CircularLoader />
    if (!company.data) return null
    return (
        <div className="w-full h-full flex flex-col justify-start items-stretch overflow-auto border border-neutral/25 rounded-md">
            <div className="w-full flex justify-between items-center p-4 border-b border-neutral/10 last:border-b-0">
                <UpdateCompany>
                    <ButtonOutline
                        icon={<IconPencil />}
                        text="Modifier"
                        className="border-dashed"
                    />
                </UpdateCompany>
            </div>
            <DataBlock.Root className="border-0">
                <DataBlock.Item label="SIREN">
                    <FormatText text={company.data.siren} />
                </DataBlock.Item>
                <DataBlock.Item label="Nom">
                    <FormatText text={company.data.name} />
                </DataBlock.Item>
                <DataBlock.Item label="Adresse">
                    <FormatText text={company.data.address} />
                </DataBlock.Item>
                <DataBlock.Item label="Email">
                    <FormatLink text={company.data.email} />
                </DataBlock.Item>
            </DataBlock.Root>
        </div>
    )
}
