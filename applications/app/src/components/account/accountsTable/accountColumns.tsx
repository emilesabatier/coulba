import { ButtonGhost, ButtonMenu, ButtonMenuContent } from "@monassosportive/design/buttons"
import { FormatBoolean, FormatDateTime, FormatLink, FormatNull, FormatText, formatBoolean, formatDateTime } from "@monassosportive/design/formats"
import { Columns, FilterDateRange, FilterSwitch, FilterText, dateRangeFilter, recordFilter, switchFilter, textFilter } from "@monassosportive/design/layouts"
import { PopoverMenu } from "@monassosportive/design/overlays"
import { DashboardAccount } from "@monassosportive/schemas/routes"
import { IconDots, IconEdit, IconSend, IconTrash, IconZoomIn } from "@tabler/icons-react"
import { Link } from "@tanstack/react-router"
import { capitalize } from "../../../services/capitalize.service"
import { collaboratorFormat } from "../../collaborator/formatCollaborator/collaborator.format"
import { FormatCollaboratorWithFetch } from "../../collaborator/formatCollaborator/formatCollaboratorWithFetch"
import { FilterRole } from "../../role/filterRole"
import { FormatRoleWithFetch } from "../../role/formatRole/formatRoleWithFetch"
import { roleFormat } from "../../role/formatRole/role.format"
import { DeleteOneAccount } from "../deleteOneAccount/deleteOneAccount"
import { FilterAccount } from "../filterAccount"
import { accountFormat } from "../formatAccount/account.format"
import { FormatAccountWithFetch } from "../formatAccount/formatAccountWithFetch"
import { SendCredentials } from "../sendCredentials/sendCredentials"
import { UpdateOneAccount } from "../updateOneAccount/updateOneAccount"


export const accountColumns: Columns<DashboardAccount.ReadOneAccountReturn>[] = [
    {
        accessorKey: "actions",
        accessorFn: () => undefined,
        header: "",
        cell: (account) => {
            return (
                <PopoverMenu
                    triggerElement={<ButtonGhost icon={<IconDots />} />}
                >
                    <Link
                        to="/comptes/$idAccount"
                        params={{ idAccount: account.id }}
                    >
                        <ButtonMenuContent
                            text="Consulter"
                            icon={<IconZoomIn />}
                        />
                    </Link>
                    <SendCredentials account={account}>
                        <ButtonMenu
                            text="Envoyer les identifiants"
                            icon={<IconSend />}
                        />
                    </SendCredentials>
                    <UpdateOneAccount account={account}>
                        <ButtonMenu
                            text="Mettre à jour"
                            icon={<IconEdit />}
                        />
                    </UpdateOneAccount>
                    <DeleteOneAccount account={account}>
                        <ButtonMenu
                            text="Supprimer"
                            icon={<IconTrash />}
                            color="error"
                        />
                    </DeleteOneAccount>
                </PopoverMenu>
            )
        },
        enableHiding: false
    },
    {
        accessorKey: "isActive",
        accessorFn: (account) => formatBoolean(account.isActive),
        header: "Activé ?",
        cell: (account) => <FormatBoolean boolean={account.isActive} />,
        enableSorting: true,
        enableColumnFilter: true,
        filterFn: switchFilter,
        filterElement: <FilterSwitch />
    },
    {
        accessorKey: "idRole",
        accessorFn: (account) => account.isAdmin ? "Admnistrateur" : roleFormat(account.role),
        header: "Rôle",
        cell: (account) => (
            (account.isAdmin) ? (
                <span className="italic text-neutral/50 text-sm">Administrateur</span>
            ) : (
                !account.idRole ? <FormatNull /> : <FormatRoleWithFetch idRole={account.idRole} />
            )
        ),
        enableSorting: true,
        enableColumnFilter: true,
        filterFn: recordFilter("idRole"),
        filterElement: <FilterRole />
    },
    {
        accessorKey: "surname",
        accessorFn: (account) => capitalize(account.contact.surname),
        header: "Nom",
        cell: (account) => <FormatText text={capitalize(account.contact.surname)} className="whitespace-nowrap overflow-x-hidden text-ellipsis" />,
        enableSorting: true,
        enableColumnFilter: true,
        filterFn: textFilter,
        filterElement: <FilterText />
    },
    {
        accessorKey: "forename",
        accessorFn: (account) => capitalize(account.contact.forename),
        header: "Prénom",
        cell: (account) => <FormatText text={capitalize(account.contact.forename)} className="whitespace-nowrap overflow-x-hidden text-ellipsis" />,
        enableSorting: true,
        enableColumnFilter: true,
        filterFn: textFilter,
        filterElement: <FilterText />
    },
    {
        accessorKey: "email",
        accessorFn: (account) => account.contact.email,
        header: "Email de connexion",
        cell: (account) => <FormatLink text={account.contact.email} />,
        enableSorting: true,
        enableColumnFilter: true,
        filterFn: textFilter,
        filterElement: <FilterText />
    },
    {
        accessorKey: "phoneNumber",
        accessorFn: (account) => account.contact.phoneNumber,
        header: "Numéro de téléphone",
        cell: (account) => <FormatLink text={`+${account.contact.phonePrefix}${account.contact.phoneNumber}`} />,
        enableSorting: true,
        enableColumnFilter: true,
        filterFn: textFilter,
        filterElement: <FilterText />
    },
    {
        accessorKey: "collaborator",
        accessorFn: (account) => collaboratorFormat(account.collaborator),
        header: "Collaborateur lié",
        cell: (account) => !account.idCollaborator ? <FormatNull /> : <FormatCollaboratorWithFetch idCollaborator={account.idCollaborator} />,
        enableSorting: true
    },
    {
        accessorKey: "lastCredentialsSentAt",
        accessorFn: (account) => formatDateTime(account.lastCredentialsSentAt),
        header: "Date du dernier envoi des identifiants",
        cell: (account) => <FormatDateTime isoDate={account.lastCredentialsSentAt} />,
        enableSorting: true,
        enableColumnFilter: true,
        filterFn: dateRangeFilter,
        filterElement: <FilterDateRange />
    },
    {
        accessorKey: "lastUpdatedAt",
        accessorFn: (account) => formatDateTime(account.lastUpdatedAt),
        header: "Dernière modification le",
        cell: (account) => <FormatDateTime isoDate={account.lastUpdatedAt} />,
        enableSorting: true,
        enableColumnFilter: true,
        filterFn: dateRangeFilter,
        filterElement: <FilterDateRange />
    },
    {
        accessorKey: "lastUpdatedByAccount",
        accessorFn: (account) => accountFormat(account.lastUpdatedByAccount),
        header: "Dernière modification par",
        cell: (account) => !account.lastUpdatedBy ? <FormatNull /> : <FormatAccountWithFetch idAccount={account.lastUpdatedBy} />,
        enableSorting: true,
        enableColumnFilter: true,
        filterFn: recordFilter("lastUpdatedBy"),
        filterElement: <FilterAccount />
    },
    {
        accessorKey: "createdAt",
        accessorFn: (account) => formatDateTime(account.createdAt),
        header: "Créé le",
        cell: (account) => <FormatDateTime isoDate={account.createdAt} />,
        enableSorting: true,
        enableColumnFilter: true,
        filterFn: dateRangeFilter,
        filterElement: <FilterDateRange />
    },
    {
        accessorKey: "createdByAccount",
        accessorFn: (account) => accountFormat(account.createdByAccount),
        header: "Créé par",
        cell: (account) => !account.createdBy ? <FormatNull /> : <FormatAccountWithFetch idAccount={account.createdBy} />,
        enableSorting: true,
        enableColumnFilter: true,
        filterFn: recordFilter("createdBy"),
        filterElement: <FilterAccount />
    }
]
