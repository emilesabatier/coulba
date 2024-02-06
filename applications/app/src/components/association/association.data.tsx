import { FormatDateTime, FormatNull, FormatText } from "@monassosportive/design/formats"
import { DashboardAssociation } from "@monassosportive/schemas/routes"
import { FormatAccountWithFetch } from "../account/formatAccount/formatAccountWithFetch"


export function associationData(association: DashboardAssociation.ReadAssociationReturn) {
    return ([
        {
            key: "identity",
            title: "Identité",
            items: [
                {
                    key: "name",
                    label: 'Nom',
                    value: <FormatText text={association.name} className="whitespace-normal" />
                },
                {
                    key: "description",
                    label: 'Description',
                    value: <FormatText text={association.description} className="whitespace-normal" />
                },
                {
                    key: "idRNA",
                    label: 'Numéro RNA',
                    value: <FormatText text={association.idRNA} />,
                    description: "Votre numéro unique d'identification au Répertoire National des Associations."
                },
            ]
        },
        {
            key: "metadata",
            title: "Métadonnées",
            items: [
                {
                    key: "lastUpdatedAt",
                    label: 'Dernière modification',
                    value: <FormatDateTime isoDate={association.lastUpdatedAt} />
                },
                {
                    key: "lastUpdatedAtByAccount",
                    label: 'Dernière modification par',
                    value: !association.lastUpdatedBy ? <FormatNull /> : <FormatAccountWithFetch idAccount={association.lastUpdatedBy} />
                }
            ]
        }
    ])
}
