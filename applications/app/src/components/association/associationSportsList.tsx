import { ButtonGhost } from "@monassosportive/design/buttons"
import { IconZoomIn } from "@tabler/icons-react"
import { Link } from "@tanstack/react-router"
import { useAssociation } from "../../hooks/data/useAssociation"
import { DataList } from "../layouts/dataList/dataList"
import { Placeholder } from "../layouts/placeholder"
import { Restricted } from "../layouts/restricted"
import { sportFormat } from "../sport/formatSport/sport.format"


export function AssociationSportsList() {
    // const navigate = useNavigate()
    const association = useAssociation()

    return (
        <Placeholder error={association.error} isLoading={association.isLoading} loadingType="circular">
            <Restricted
                resource="association"
                action="read"
                displayMessage
            >
                {
                    !association.data ? null : (
                        <DataList.Root id="sports">
                            <DataList.Header title="Sports" length={association.data.associationSports.length} />
                            <DataList.Content>
                                {
                                    association.data?.associationSports.map((associationSport) => (
                                        <DataList.Item key={associationSport.id}>
                                            <span className="p-2">{sportFormat(associationSport.sport)}</span>
                                            <Link
                                                to="/association/sports/$idSport"
                                                params={{ idSport: associationSport.idSport }}
                                            >
                                                <ButtonGhost
                                                    icon={<IconZoomIn />}
                                                />
                                            </Link>
                                            {/* <ButtonGhost
                                                icon={<IconZoomIn />}
                                                onClick={() => navigate({ to: "/association/sports/:idSport", params: { idSport: associationSport.idSport } })}
                                            /> */}
                                        </DataList.Item>
                                    ))
                                }
                            </DataList.Content>
                        </DataList.Root>
                    )
                }
            </Restricted>
        </Placeholder >
    )
}
