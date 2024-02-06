'use client'

import { ButtonPlain } from "@monassosportive/design/buttons"
import { IconPlus } from "@tabler/icons-react"
import { Content } from "../../../../components/layouts/content/content"
import { CreateOnePosition } from "../../../../components/position/createOnePosition/createOnePosition"
import { PositionsList } from "../../../../components/position/positionsList/positionsList"


export function PositionsPage() {
    return (
        <Content.Root>
            <CreateOnePosition>
                <ButtonPlain
                    text="Ajouter un poste"
                    icon={<IconPlus />}
                />
            </CreateOnePosition>
            <PositionsList />
        </Content.Root>
    )
}
