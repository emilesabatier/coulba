'use client'

import { ButtonOutline } from "@monassosportive/design/buttons"
import { IconEdit, IconTrash } from "@tabler/icons-react"
import { useParams } from "@tanstack/react-router"
import { BackButton } from "../../../../components/layouts/backButton"
import { Content } from "../../../../components/layouts/content/content"
import { DataBlock } from "../../../../components/layouts/dataBlock/dataBlock"
import { DeleteOneRollcall } from "../../../../components/rollcall/deleteOneRollcall/deleteOneRollcall"
import { rollcallFormat } from "../../../../components/rollcall/formatRollcall/rollcall.format"
import { rollcallData } from "../../../../components/rollcall/rollcall.data"
import { RollcallIcon } from "../../../../components/rollcall/rollcall.icon"
import { UpdateOneRollcall } from "../../../../components/rollcall/updateOneRollcall/updateOneRollcall"
import { useRollcall } from "../../../../hooks/data/useRollcall"
import { rollcallRoute } from "../../../../routes/dashboard/agenda/rollcalls/rollcall.route"


export function RollcallPage() {
    const { idRollcall } = useParams({ from: rollcallRoute.id })
    const rollcall = useRollcall(idRollcall)

    if (!rollcall.data) return null

    const dataGroups = rollcallData(rollcall.data)
    return (
        <Content.Root>
            <Content.Header className="justify-between">
                <div className="flex justify-start items-center gap-1 md:gap-2 ">
                    <BackButton to="/agenda/appels" params={{}} />
                    <div className="flex justify-start items-center gap-1 md:gap-2 ">
                        <RollcallIcon />
                        <h2 className="text-2xl whitespace-nowrap overflow-hidden text-ellipsis">{rollcallFormat(rollcall.data)}</h2>
                    </div>
                </div>
                <div className="w-fit flex justify-end items-center gap-1 md:gap-2 ">
                    <UpdateOneRollcall rollcall={rollcall.data}>
                        <ButtonOutline
                            icon={<IconEdit />}
                        />
                    </UpdateOneRollcall>
                    <DeleteOneRollcall rollcall={rollcall.data}>
                        <ButtonOutline
                            icon={<IconTrash />}
                            color="error"
                        />
                    </DeleteOneRollcall>
                </div>
            </Content.Header>
            <DataBlock.Grid id="rollcall">
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
