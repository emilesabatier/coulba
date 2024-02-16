import { ValidRoutes } from "../../../routes/router"


export type MenuItem = {
    menuPath: ValidRoutes
    navigatePath: ValidRoutes
    label: string
}

export const menuItems: MenuItem[] = [
    {
        menuPath: "/",
        navigatePath: "/",
        label: "Vue d'ensemble"
    },
    {
        menuPath: "/livres",
        navigatePath: "/livres/journal",
        label: "Livres"
    },
    {
        menuPath: "/pieces",
        navigatePath: "/pieces",
        label: "Pièce justificatives"
    },
    {
        menuPath: "/liasse",
        navigatePath: "/liasse/bilan",
        label: "Liasse fiscale"
    },
    {
        menuPath: "/configuration",
        navigatePath: "/configuration/societe",
        label: "Configuration"
    },
]
