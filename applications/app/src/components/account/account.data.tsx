import { FormatBoolean, FormatDateTime, FormatLink, FormatNull, FormatText } from "@monassosportive/design/formats"
import { DashboardAccount } from "@monassosportive/schemas/routes"
import { capitalize } from "../../services/capitalize.service"
import { FormatCollaboratorWithFetch } from "../collaborator/formatCollaborator/formatCollaboratorWithFetch"
import { FormatRoleWithFetch } from "../role/formatRole/formatRoleWithFetch"
import { FormatAccountWithFetch } from "./formatAccount/formatAccountWithFetch"


export function accountData(account: DashboardAccount.ReadOneAccountReturn) {
    return ([
        {
            key: "information",
            title: "Informations",
            items: [
                {
                    key: "isActive",
                    label: "Activé ?",
                    value: <FormatBoolean boolean={account.isActive} />,
                    description: undefined
                },
                {
                    key: "idRole",
                    label: "Rôle",
                    value: !account.idRole ? <FormatNull /> : <FormatRoleWithFetch idRole={account.idRole} />,
                    description: undefined
                },
                {
                    key: "surname",
                    label: "Nom",
                    value: <FormatText text={capitalize(account.contact.surname)} />,
                    description: undefined
                },
                {
                    key: "forename",
                    label: "Prénom",
                    value: <FormatText text={capitalize(account.contact.forename)} />,
                    description: undefined
                },
                {
                    key: "email",
                    label: "Email de connexion",
                    value: <FormatLink text={account.contact.email} />,
                    description: undefined
                },
                {
                    key: "phoneNumber",
                    label: "Numéro de téléphone",
                    value: <FormatLink text={`+${account.contact.phonePrefix}${account.contact.phoneNumber}`} />,
                    description: undefined
                },
                {
                    key: "collaborator",
                    label: "Collaborateur lié",
                    value: !account.idCollaborator ? <FormatNull /> : <FormatCollaboratorWithFetch idCollaborator={account.idCollaborator} />,
                    description: undefined
                }
            ]
        },
        {
            key: "metadata",
            title: "Métadonnées",
            items: [
                {
                    key: "id",
                    label: "Identifiant unique",
                    value: <FormatText text={account.id} className="uppercase" />,
                    description: undefined
                },
                {
                    key: "lastCredentialsSentAt",
                    label: "Date du dernier envoi des identifiants",
                    value: <FormatDateTime isoDate={account.lastCredentialsSentAt} />,
                    description: undefined
                },
                {
                    key: "lastUpdatedAt",
                    label: "Dernière modification le",
                    value: <FormatDateTime isoDate={account.lastUpdatedAt} />,
                    description: undefined
                },
                {
                    key: "lastUpdatedBy",
                    label: "Dernière modification par",
                    value: !account.lastUpdatedBy ? <FormatNull /> : <FormatAccountWithFetch idAccount={account.lastUpdatedBy} />,
                    description: undefined
                },
                {
                    key: "createdAt",
                    label: "Créé le",
                    value: <FormatDateTime isoDate={account.createdAt} />,
                    description: undefined
                },
                {
                    key: "createdBy",
                    label: "Créé par",
                    value: !account.createdBy ? <FormatNull /> : <FormatAccountWithFetch idAccount={account.createdBy} />,
                    description: undefined
                }
            ]
        }
    ])
}
