'use client'

import { ButtonPlain } from "@monassosportive/design/buttons"
import { IconPlus } from "@tabler/icons-react"
import { Content } from "../../../components/layouts/content/content"
import { CreateOneRole } from "../../../components/role/createOneRole/createOneRole"
import { RolesList } from "../../../components/role/rolesList/rolesList"


export function RolesPage() {
    return (
        <Content.Root>
            <CreateOneRole>
                <ButtonPlain
                    text="Ajouter un rôle"
                    icon={<IconPlus />}
                />
            </CreateOneRole>
            <RolesList />
        </Content.Root>
    )
}
