'use client'

import { ButtonOutline } from "@monassosportive/design/buttons"
import { IconEdit, IconTrash } from "@tabler/icons-react"
import { useParams } from "@tanstack/react-router"
import { BackButton } from "../../../components/layouts/backButton"
import { Content } from "../../../components/layouts/content/content"
import { DataBlock } from "../../../components/layouts/dataBlock/dataBlock"
import { DeleteOneRole } from "../../../components/role/deleteOneRole/deleteOneRole"
import { roleFormat } from "../../../components/role/formatRole/role.format"
import { RoleIcon } from "../../../components/role/role.icon"
import { UpdateOneRole } from "../../../components/role/updateOneRole/updateOneRole"
import { roleRoute } from "../../../routes/dashboard/accounts/roles/role.route"
import { roleData } from "../../../components/role/role.data"
import { useRole } from "../../../hooks/data/useRole"



export function RolePage() {
    const { idRole } = useParams({ from: roleRoute.id })
    const role = useRole(idRole)

    if (!role.data) return null

    const dataGroups = roleData(role.data)
    return (
        <Content.Root>
            <Content.Header className="justify-between">
                <div className="flex justify-start items-center gap-1 md:gap-2 ">
                    <BackButton to="/comptes/roles" params={{}} />
                    <div className="flex justify-start items-center gap-1 md:gap-2 ">
                        <RoleIcon />
                        <h2 className="text-2xl whitespace-nowrap overflow-hidden text-ellipsis">{roleFormat(role.data)}</h2>
                    </div>
                </div>
                <div className="w-fit flex justify-end items-center gap-1 md:gap-2 ">
                    <UpdateOneRole role={role.data}>
                        <ButtonOutline
                            icon={<IconEdit />}
                        />
                    </UpdateOneRole>
                    <DeleteOneRole role={role.data}>
                        <ButtonOutline
                            icon={<IconTrash />}
                            color="error"
                        />
                    </DeleteOneRole>
                </div>
            </Content.Header>
            <DataBlock.Grid id="role">
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
