'use client'

import { ButtonOutline } from "@monassosportive/design/buttons"
import { IconEdit, IconTrash } from "@tabler/icons-react"
import { useParams } from "@tanstack/react-router"
import { adherentData } from "../../../components/adherent/adherent.data"
import { AdherentIcon } from "../../../components/adherent/adherent.icon"
import { DeleteOneAdherent } from "../../../components/adherent/deleteOneAdherent/deleteOneAdherent"
import { adherentFormat } from "../../../components/adherent/formatAdherent/adherent.format"
import { UpdateOneAdherent } from "../../../components/adherent/updateOneAdherent/updateOneAdherent"
import { BackButton } from "../../../components/layouts/backButton"
import { Content } from "../../../components/layouts/content/content"
import { DataBlock } from "../../../components/layouts/dataBlock/dataBlock"
import { useAdherent } from "../../../hooks/data/useAdherent"
import { adherentRoute } from "../../../routes/dashboard/adherents/adherent.route"



export function AdherentPage() {
    const { idAdherent } = useParams({ from: adherentRoute.id })
    const adherent = useAdherent(idAdherent)

    if (!adherent.data) return null

    const dataGroups = adherentData(adherent.data)
    return (
        <Content.Root>
            <Content.Header className="justify-between">
                <div className="flex justify-start items-center gap-1 md:gap-2 ">
                    <BackButton to="/adherents" params={{}} />
                    <div className="flex justify-start items-center gap-1 md:gap-2 ">
                        <AdherentIcon />
                        <h2 className="text-2xl whitespace-nowrap overflow-hidden text-ellipsis">{adherentFormat(adherent.data)}</h2>
                    </div>
                </div>
                <div className="w-fit flex justify-end items-center gap-1 md:gap-2 ">
                    <UpdateOneAdherent adherent={adherent.data}>
                        <ButtonOutline
                            icon={<IconEdit />}
                        />
                    </UpdateOneAdherent>
                    <DeleteOneAdherent adherent={adherent.data}>
                        <ButtonOutline
                            icon={<IconTrash />}
                            color="error"
                        />
                    </DeleteOneAdherent>
                </div>
            </Content.Header>
            <DataBlock.Grid id="adherent">
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
