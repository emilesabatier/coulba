'use client'

import { ButtonSubtle } from "@monassosportive/design/buttons"
import { IconEdit } from "@tabler/icons-react"
import { associationData } from "../../../components/association/association.data"
import { UpdateAssociationIdentity } from "../../../components/association/updateAssociationIdentity/updateAssociationIdentity"
import { Content } from "../../../components/layouts/content/content"
import { DataBlock } from "../../../components/layouts/dataBlock/dataBlock"
import { Placeholder } from "../../../components/layouts/placeholder"
import { useAssociation } from "../../../hooks/data/useAssociation"


export function AssociationInformationPage() {
    const association = useAssociation()

    const dataGroups = !association.data ? [] : associationData(association.data).filter(x => ["identity", "metadata"].includes(x.key))
    return (
        <Content.Root>
            <Placeholder error={association.error} isLoading={association.isLoading} loadingType="circular">
                {
                    !association.data ? null : (
                        <UpdateAssociationIdentity association={association.data}>
                            <ButtonSubtle
                                text="Modifier"
                                icon={<IconEdit />}
                            />
                        </UpdateAssociationIdentity>
                    )
                }
            </Placeholder>
            <DataBlock.Grid id="association">
                {
                    dataGroups.map((group) => (
                        <DataBlock.Root key={group.key}>
                            <DataBlock.Header title={group.title} />
                            <DataBlock.Content>
                                {
                                    group.items.map((item) => (
                                        <DataBlock.Item
                                            key={item.key}
                                            label={item.label}
                                            description={item.description}
                                            children={item.value}
                                        />
                                    ))
                                }
                            </DataBlock.Content>
                        </DataBlock.Root>
                    ))
                }
            </DataBlock.Grid>
        </Content.Root>
    )
}
