'use client'

import { ButtonOutline } from "@monassosportive/design/buttons"
import { IconEdit, IconTrash } from "@tabler/icons-react"
import { useParams } from "@tanstack/react-router"
import { collaboratorData } from "../../../../components/collaborator/collaborator.data"
import { CollaboratorIcon } from "../../../../components/collaborator/collaborator.icon"
import { DeleteOneCollaborator } from "../../../../components/collaborator/deleteOneCollaborator/deleteOneCollaborator"
import { collaboratorFormat } from "../../../../components/collaborator/formatCollaborator/collaborator.format"
import { UpdateOneCollaborator } from "../../../../components/collaborator/updateOneCollaborator/updateOneCollaborator"
import { BackButton } from "../../../../components/layouts/backButton"
import { Content } from "../../../../components/layouts/content/content"
import { DataBlock } from "../../../../components/layouts/dataBlock/dataBlock"
import { useCollaborator } from "../../../../hooks/data/useCollaborator"
import { collaboratorRoute } from "../../../../routes/dashboard/collaborators/collaborator.route"


export function CollaboratorPage() {
    const { idCollaborator } = useParams({ from: collaboratorRoute.id })
    const collaborator = useCollaborator(idCollaborator)

    if (!collaborator.data) return null

    const dataGroups = collaboratorData(collaborator.data)
    return (
        <Content.Root>
            <Content.Header className="justify-between">
                <div className="flex justify-start items-center gap-1 md:gap-2 ">
                    <BackButton to="/collaborateurs" params={{}} />
                    <div className="flex justify-start items-center gap-1 md:gap-2 ">
                        <CollaboratorIcon />
                        <h2 className="text-2xl whitespace-nowrap overflow-hidden text-ellipsis">{collaboratorFormat(collaborator.data)}</h2>
                    </div>
                </div>
                <div className="w-fit flex justify-end items-center gap-1 md:gap-2 ">
                    <UpdateOneCollaborator collaborator={collaborator.data}>
                        <ButtonOutline
                            icon={<IconEdit />}
                        />
                    </UpdateOneCollaborator>
                    <DeleteOneCollaborator collaborator={collaborator.data}>
                        <ButtonOutline
                            icon={<IconTrash />}
                            color="error"
                        />
                    </DeleteOneCollaborator>
                </div>
            </Content.Header>
            <DataBlock.Grid id="collaborator">
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
