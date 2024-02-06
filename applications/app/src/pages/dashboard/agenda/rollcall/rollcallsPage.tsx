'use client'

import { ButtonPlain } from "@monassosportive/design/buttons"
import { IconPlus } from "@tabler/icons-react"
import { Content } from "../../../../components/layouts/content/content"
import { CreateOneRollcall } from "../../../../components/rollcall/createOneRollcall/createOneRollcall"
import { RollcallsTable } from "../../../../components/rollcall/rollcallsTable/rollcallsTable"


export function RollcallsPage() {
    return (
        <Content.Root>
            <CreateOneRollcall>
                <ButtonPlain
                    text="Ajouter un appel"
                    icon={<IconPlus />}
                />
            </CreateOneRollcall>
            <RollcallsTable />
        </Content.Root>
    )
}
