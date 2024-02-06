'use client'

import { ButtonPlain } from "@monassosportive/design/buttons"
import { IconPlus } from "@tabler/icons-react"
import { CardsTable } from "../../../components/card/cardsTable/cardsTable"
import { CreateOneCard } from "../../../components/card/createOneCard/createOneCard"
import { Content } from "../../../components/layouts/content/content"


export function CardsPage() {
    return (
        <Content.Root>
            <CreateOneCard>
                <ButtonPlain
                    text="Ajouter une carte"
                    icon={<IconPlus />}
                />
            </CreateOneCard>
            <CardsTable />
        </Content.Root>
    )
}
