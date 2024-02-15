import { FormatDateTime, FormatLink, FormatNull, FormatText } from "@monassosportive/design/formats"
import { DashboardProfile } from "@monassosportive/schemas/routes"
import { capitalize } from "../../services/capitalize.service"
import { FormatCollaboratorWithFetch } from "../collaborator/formatCollaborator/formatCollaboratorWithFetch"


export function profileData(profile: DashboardProfile.ReadProfileReturn) {
    return ([
        {
            key: "identity",
            title: "Identité",
            items: [
                {
                    key: "surname",
                    label: 'Nom',
                    value: <FormatText text={capitalize(profile.contact.surname)} className="whitespace-normal" />
                },
                {
                    key: "forename",
                    label: 'Prénom',
                    value: <FormatText text={capitalize(profile.contact.forename)} className="whitespace-normal" />
                },
                {
                    key: "phoneNumber",
                    label: 'Numéro de téléphone',
                    value: <FormatLink text={`+${profile.contact.phonePrefix}${profile.contact.phoneNumber}`} />
                },
                {
                    key: "idCollaborator",
                    label: 'Collaborateur lié',
                    value: !profile.idCollaborator ? <FormatNull /> : <FormatCollaboratorWithFetch idCollaborator={profile.idCollaborator} />,
                    description: "Si vous intervenez dans un cours/évènement de l'association."
                },
            ]
        },
        {
            key: "security",
            title: "Sécurité",
            items: [
                {
                    key: "email",
                    label: 'Email',
                    value: <FormatLink text={profile.contact.email} />,
                    description: undefined
                }
            ]
        },
        {
            key: "metadata",
            title: "Métadonnées",
            items: [
                {
                    key: "lastUpdatedOn",
                    label: 'Dernière modification',
                    value: <FormatDateTime isoDate={profile.lastUpdatedOn} />
                },
                {
                    key: "lastUpdatedOnByAccount",
                    label: 'Date de création',
                    value: <FormatDateTime isoDate={profile.createdOn} />
                }
            ]
        }
    ])
}
