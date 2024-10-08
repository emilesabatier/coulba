import { IconFolders, IconPencil, IconReport, IconSettings } from "@tabler/icons-react"
import { ReactElement } from "react"
import { ValidRoutes } from "../../../routes/router"


type SubMenuItem = {
    basePath: ValidRoutes
    path: ValidRoutes
    label: string
}

export type MenuItem = {
    key: string
    label: string
    icon: ReactElement
    path?: ValidRoutes
    basePath: ValidRoutes
    subMenuItems?: SubMenuItem[]
}


export const menuItems: MenuItem[] = [
    // {
    //     key: "overview",
    //     label: "Accueil",
    //     basePath: "/",
    //     path: "/"
    // },
    {
        key: "rows",
        label: "Écritures",
        icon: <IconPencil size={16} />,
        basePath: "/ecritures",
        path: "/ecritures"
    },
    {
        key: "attachments",
        label: "Stockage",
        icon: <IconFolders size={16} />,
        basePath: "/stockage",
        path: "/stockage"
    },
    {
        key: "reports",
        label: "Documents",
        icon: <IconReport size={16} />,
        basePath: "/documents",
        path: "/documents/bilan",
        subMenuItems: [
            {
                basePath: "/documents/livre-journal",
                path: "/documents/livre-journal",
                label: "Livre-journal"
            },
            {
                basePath: "/documents/grand-livre",
                path: "/documents/grand-livre",
                label: "Grand livre"
            },
            {
                basePath: "/documents/balance",
                path: "/documents/balance",
                label: "Balance"
            },
            {
                basePath: "/documents/bilan",
                path: "/documents/bilan",
                label: "Bilan"
            },
            {
                basePath: "/documents/compte-de-resultat",
                path: "/documents/compte-de-resultat",
                label: "Compte de résultat"
            }
        ]
    },
    {
        key: "configuration",
        label: "Configuration",
        icon: <IconSettings size={16} />,
        basePath: "/configuration",
        path: "/configuration/organisation",
        subMenuItems: [
            {
                basePath: "/configuration/organisation",
                path: "/configuration/organisation",
                label: "Organisation"
            },
            {
                basePath: "/configuration/utilisateurs",
                path: "/configuration/utilisateurs",
                label: "Utilisateurs"
            },
            {
                basePath: "/configuration/api",
                path: "/configuration/api",
                label: "Accès API"
            },
            {
                basePath: "/configuration/exercices",
                path: "/configuration/exercices",
                label: "Exercices fiscaux"
            },
            {
                basePath: "/configuration/journaux",
                path: "/configuration/journaux",
                label: "Journaux auxiliaires"
            },
            {
                basePath: "/configuration/comptes",
                path: "/configuration/comptes",
                label: "Plan des comptes"
            },
            {
                basePath: "/configuration/bilan",
                path: "/configuration/bilan",
                label: "Bilan"
            },
            {
                basePath: "/configuration/compte-de-resultat",
                path: "/configuration/compte-de-resultat",
                label: "Compte de résultat"
            }
        ]
    },
]
