import { ButtonPlain } from "@coulba/design/buttons"
import { FormatLink, FormatSelect, FormatText } from "@coulba/design/formats"
import { CircularLoader } from "@coulba/design/layouts"
import { IconPencil } from "@tabler/icons-react"
import { useOrganization } from "../../contexts/organization/useOrganization"
import { DataBlock } from "../layouts/dataBlock/dataBlock"
import { Section } from "../layouts/section/section"
import { Title } from "../layouts/title"
import { organizationScopeOptions } from "./organizationScopeOptions"
import { UpdateOrganization } from "./updateOrganization/updateOrganization"


export function OrganizationContent() {
    const organization = useOrganization()

    if (organization.isLoading) return <CircularLoader className="m-3" />
    if (!organization.data) return null
    return (
        <Section.Root>
            <Section.Item>
                <UpdateOrganization>
                    <ButtonPlain
                        icon={<IconPencil />}
                        text="Modifier"
                    />
                </UpdateOrganization>
            </Section.Item>
            <Section.Item>
                <DataBlock.Root>
                    <DataBlock.Header>
                        <Title title="Informations" />
                    </DataBlock.Header>
                    <DataBlock.Content>
                        <DataBlock.Item label="Type">
                            <FormatSelect option={organization.data.scope} options={organizationScopeOptions} />
                        </DataBlock.Item>
                        <DataBlock.Item label="SIREN">
                            <FormatText text={organization.data.siren} />
                        </DataBlock.Item>
                        <DataBlock.Item label="Nom">
                            <FormatText text={organization.data.name} />
                        </DataBlock.Item>
                        <DataBlock.Item label="Email">
                            <FormatLink text={organization.data.email} />
                        </DataBlock.Item>
                    </DataBlock.Content>
                </DataBlock.Root>
            </Section.Item>
        </Section.Root>
    )
}
