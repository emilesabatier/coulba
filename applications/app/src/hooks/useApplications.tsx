import { IconMessageCircle } from "@tabler/icons-react"
import { useNavigate, useRouterState } from "@tanstack/react-router"
import { AccountIcon } from "../components/account/account.icon"
import { AdherentIcon } from "../components/adherent/adherent.icon"
import { AssociationIcon } from "../components/association/association.icon"
import { AgendaIcon } from "../components/calendar/calendar.icon"
import { CollaboratorIcon } from "../components/collaborator/collaborator.icon"
import { SubscriptionIcon } from "../components/subscription/subscription.icon"
import { useAuth } from "./useAuth"


export type ApplicationRoute = {
    key: string
    title: string
    icon: JSX.Element
    description?: string
    isVisible?: boolean
    onClick: () => void
    isActive: boolean
}
export type ApplicationGroup = {
    key: string
    label: string
    routes: ApplicationRoute[]
}

export function useApplications(): [ApplicationGroup[], boolean] {
    const navigate = useNavigate()
    const { location } = useRouterState()

    const adherentPermission = useAuth("adherent")
    const registrationFormPermission = useAuth("registrationForm")
    const collaboratorPermission = useAuth("collaborator")
    const lessonPermission = useAuth("lesson")
    const eventPermission = useAuth("event")
    const rollcallPermission = useAuth("rollcall")
    const conversationPermission = useAuth("conversation")
    const announcementPermission = useAuth("announcement")
    const associationPermission = useAuth("association")
    const accountPermission = useAuth("account")
    const permissionRole = useAuth("role")
    const subscriptionPermission = useAuth("subscription")
    const contactPermission = useAuth("contact")
    const occurrencePermission = useAuth("occurrence")

    const isLoading = (
        !!adherentPermission.at(1) ||
        !!registrationFormPermission.at(1) ||
        !!collaboratorPermission.at(1) ||
        !!lessonPermission.at(1) ||
        !!eventPermission.at(1) ||
        !!rollcallPermission.at(1) ||
        !!conversationPermission.at(1) ||
        !!announcementPermission.at(1) ||
        !!associationPermission.at(1) ||
        !!accountPermission.at(1) ||
        !!permissionRole.at(1) ||
        !!contactPermission.at(1) ||
        !!subscriptionPermission.at(1) ||
        !!occurrencePermission.at(1)
    )

    return ([
        [
            {
                key: "association",
                label: "Association",
                routes: [
                    {
                        key: "adherents",
                        icon: <AdherentIcon />,
                        title: "Adhérents",
                        description: "Pour gérer vos adhérents depuis une interface unique.",
                        onClick: () => navigate({ to: "/adherents" }),
                        isVisible: adherentPermission.at(0) || registrationFormPermission.at(0),
                        isActive: location.href.includes("/adherents"),
                    },
                    {
                        key: "collaborators",
                        icon: <CollaboratorIcon />,
                        title: "Collaborateurs",
                        description: "Gérer les informations de ceux qui interviennent pour l'association (professeurs, bénévoles, etc.).",
                        onClick: () => navigate({ to: "/collaborateurs" }),
                        isVisible: collaboratorPermission.at(0) || rollcallPermission.at(0),
                        isActive: location.href.includes("/collaborateurs"),
                    },
                    {
                        key: "agenda",
                        icon: <AgendaIcon />,
                        title: "Agenda",
                        description: "Pour afficher les cours et évènements dans le bon format.",
                        onClick: () => navigate({ to: "/agenda/calendrier" }),
                        isVisible: lessonPermission.at(0) || eventPermission.at(0) || occurrencePermission.at(0),
                        isActive: location.href.includes("/agenda"),
                    },
                    {
                        key: "communication",
                        icon: <IconMessageCircle />,
                        title: "Communication",
                        description: "Pour communiquer avec vos adhérents.",
                        onClick: () => navigate({ to: "/communication/messagerie" }),
                        isVisible: conversationPermission.at(0) || contactPermission.at(0) || announcementPermission.at(0),
                        isActive: location.href.includes("/communication"),
                    }
                ]
            },
            {
                key: "administration",
                label: "Administration",
                routes: [
                    {
                        key: "association",
                        icon: <AssociationIcon />,
                        title: "Association",
                        description: "Pour lire ou modifier les informations.",
                        onClick: () => navigate({ to: "/association/informations" }),
                        isVisible: associationPermission.at(0),
                        isActive: location.href.includes("/association"),
                    },
                    {
                        key: "accounts",
                        icon: <AccountIcon />,
                        title: "Comptes utilisateur",
                        description: "Pour gérer les comptes utilisateur.",
                        onClick: () => navigate({ to: "/comptes" }),
                        isVisible: accountPermission.at(0) || permissionRole.at(0),
                        isActive: location.href.includes("/comptes"),
                    },
                    {
                        key: "subscription",
                        icon: <SubscriptionIcon />,
                        title: "Abonnement",
                        description: "Pour gérer l'abonnement de l'association'.",
                        onClick: () => navigate({ to: "/abonnement/informations" }),
                        isVisible: subscriptionPermission.at(0),
                        isActive: location.href.includes("/abonnement"),
                    }
                ]
            }
        ],
        isLoading
    ])
}
