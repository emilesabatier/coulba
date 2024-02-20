import { ValidRoutes } from "../../../routes/router"


export type SubMenuItem = {
    basePath: ValidRoutes
    path: ValidRoutes
    label: string
}

export type MenuItem = {
    key: string
    label: string
    path?: ValidRoutes
    basePath: ValidRoutes
    subMenuItems?: SubMenuItem[]
}


export const menuItems: MenuItem[] = [
    {
        key: "overview",
        label: "Vue d'ensemble",
        basePath: "/",
        path: "/"
    },
    {
        key: "records",
        label: "Livres",
        basePath: "/livres",
        path: "/livres/journal",
        subMenuItems: [
            {
                basePath: "/livres/journal",
                path: "/livres/journal",
                label: "Journal"
            },
            {
                basePath: "/livres/grand-livre",
                path: "/livres/grand-livre",
                label: "Grand livre"
            },
            {
                basePath: "/livres/balance",
                path: "/livres/balance",
                label: "Balance"
            }
        ]
    },
    {
        key: "attachments",
        label: "Pièces justificatives",
        basePath: "/pieces",
        path: "/pieces"
    },
    {
        key: "declaration",
        label: "Liasse fiscale",
        basePath: "/liasse",
        path: "/liasse/bilan",
        subMenuItems: [
            {
                basePath: "/liasse/bilan",
                path: "/liasse/bilan",
                label: "Bilan"
            },
            {
                basePath: "/liasse/compte-de-resultat",
                path: "/liasse/compte-de-resultat",
                label: "Compte de résultats"
            },
            {
                basePath: "/liasse/cloture",
                path: "/liasse/cloture",
                label: "Clôture"
            }
        ]
    },
    {
        key: "configuration",
        label: "Configuration",
        basePath: "/configuration",
        path: "/configuration/societe",
        subMenuItems: [
            {
                basePath: "/configuration/societe",
                path: "/configuration/societe",
                label: "Société"
            },
            {
                basePath: "/configuration/utilisateurs",
                path: "/configuration/utilisateurs",
                label: "Utilisateurs"
            },
            {
                basePath: "/configuration/abonnement",
                path: "/configuration/abonnement",
                label: "Abonnement"
            },
            {
                basePath: "/configuration/api",
                path: "/configuration/api",
                label: "Accès API"
            },
            {
                basePath: "/configuration/exercices",
                path: "/configuration/exercices",
                label: "Exercices"
            },
            {
                basePath: "/configuration/journaux",
                path: "/configuration/journaux",
                label: "Journaux comptables"
            },
            {
                basePath: "/configuration/comptes",
                path: "/configuration/comptes",
                label: "Plan des comptes"
            }
        ]
    },
]
