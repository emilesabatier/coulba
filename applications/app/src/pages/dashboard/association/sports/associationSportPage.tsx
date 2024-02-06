'use client'

import { useParams } from "@tanstack/react-router"
import { BackButton } from "../../../../components/layouts/backButton"
import { Content } from "../../../../components/layouts/content/content"
import { DataBlock } from "../../../../components/layouts/dataBlock/dataBlock"
import { sportFormat } from "../../../../components/sport/formatSport/sport.format"
import { sportData } from "../../../../components/sport/sport.data"
import { SportIcon } from "../../../../components/sport/sport.icon"
import { useSport } from "../../../../hooks/data/useSport"
import { associationSportRoute } from "../../../../routes/dashboard/association/sports/association.sport.route"


export function AssociationSportPage() {
    const { idSport } = useParams({ from: associationSportRoute.id })
    const sport = useSport(idSport)

    if (!sport.data) return null

    const dataGroups = sportData(sport.data)
    return (
        <Content.Root>
            <Content.Header className="justify-between">
                <div className="flex justify-start items-center gap-1 md:gap-2 ">
                    <BackButton to="/association/sports" params={{}} />
                    <div className="flex justify-start items-center gap-1 md:gap-2 ">
                        <SportIcon />
                        <h2 className="text-2xl whitespace-nowrap overflow-hidden text-ellipsis">{sportFormat(sport.data)}</h2>
                    </div>
                </div>
                <div className="w-fit flex justify-end items-center gap-1 md:gap-2 ">
                </div>
            </Content.Header>
            <DataBlock.Grid id="sport">
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
