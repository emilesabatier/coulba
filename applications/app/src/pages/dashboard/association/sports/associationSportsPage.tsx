'use client'

import { ButtonSubtle } from "@monassosportive/design/buttons"
import { IconEdit } from "@tabler/icons-react"
import { AssociationSportsList } from "../../../../components/association/associationSportsList"
import { UpdateAssociationSports } from "../../../../components/association/updateAssociationSports/updateAssociationSports"
import { Content } from "../../../../components/layouts/content/content"
import { Placeholder } from "../../../../components/layouts/placeholder"
import { Restricted } from "../../../../components/layouts/restricted"
import { useAssociation } from "../../../../hooks/data/useAssociation"


export function AssociationSportsPage() {
    const association = useAssociation()

    return (
        <Content.Root>
            <Placeholder error={association.error} isLoading={association.isLoading} loadingType="circular">
                <Restricted
                    resource="association"
                    action="read"
                    displayMessage
                >
                    <UpdateAssociationSports association={association.data}>
                        <ButtonSubtle
                            text="Modifier"
                            icon={<IconEdit />}
                        />
                    </UpdateAssociationSports>
                </Restricted>
            </Placeholder>
            <AssociationSportsList />
        </Content.Root>
    )
}
