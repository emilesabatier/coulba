'use client'

import { ButtonOutline } from "@monassosportive/design/buttons"
import { IconEdit, IconTrash } from "@tabler/icons-react"
import { useParams } from "@tanstack/react-router"
import { BackButton } from "../../../../components/layouts/backButton"
import { Content } from "../../../../components/layouts/content/content"
import { DataBlock } from "../../../../components/layouts/dataBlock/dataBlock"
import { DeleteOnePosition } from "../../../../components/position/deleteOnePosition/deleteOnePosition"
import { positionFormat } from "../../../../components/position/formatPosition/position.format"
import { positionData } from "../../../../components/position/position.data"
import { PositionIcon } from "../../../../components/position/position.icon"
import { usePosition } from "../../../../hooks/data/usePosition"
import { UpdateOnePosition } from "../../../../components/position/updateOnePosition/updateOnePosition"
import { positionRoute } from "../../../../routes/dashboard/collaborators/positions/position.route"


export function PositionPage() {
    const { idPosition } = useParams({ from: positionRoute.id })
    const position = usePosition(idPosition)

    if (!position.data) return null

    const dataGroups = positionData(position.data)
    return (
        <Content.Root>
            <Content.Header className="justify-between">
                <div className="flex justify-start items-center gap-1 md:gap-2 ">
                    <BackButton to="/collaborateurs/postes" params={{}} />
                    <div className="flex justify-start items-center gap-1 md:gap-2 ">
                        <PositionIcon />
                        <h2 className="text-2xl whitespace-nowrap overflow-hidden text-ellipsis">{positionFormat(position.data)}</h2>
                    </div>
                </div>
                <div className="w-fit flex justify-end items-center gap-1 md:gap-2 ">
                    <UpdateOnePosition position={position.data}>
                        <ButtonOutline
                            icon={<IconEdit />}
                        />
                    </UpdateOnePosition>
                    <DeleteOnePosition position={position.data}>
                        <ButtonOutline
                            icon={<IconTrash />}
                            color="error"
                        />
                    </DeleteOnePosition>
                </div>
            </Content.Header>
            <DataBlock.Grid id="position">
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
