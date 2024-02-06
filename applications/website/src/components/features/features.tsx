import { tags } from "./tagOptions"


type Feature = {
    key: string
    title: string
    content: {
        title: string
        description: string
        tag?: typeof tags[number]
    }[]
}

export const features: Feature[] = [
    {
        key: "adherents",
        title: "Adhérents",
        content: [
            {
                title: "Adhérents",
                description: "Gérez la liste des adhérents de la saison actuelle. Consultez à tout moment les données liées à chaque adhérents."
            },
            {
                title: "Préinscriptions",
                description: "Générez des formulaires pour préinscrire vos futurs adhérents à la nouvelle saison.",
                tag: "new"
            },
            {
                title: "Historique",
                description: "Gardez une trace des adhérents des saisons précédentes."
            },
            {
                title: "Paiement en ligne",
                description: "Permettez à vos adhérents de vous régler via l'application, facilement.",
                tag: "dev"
            },
            {
                title: "Export",
                description: "Exportez en un clic vos données au format CSV."
            },
            {
                title: "Stockage de documents",
                description: "Stockez les documents liés à chaque adhérent et retrouvez-les rapidement au besoin.",
                tag: "dev"
            }
        ]
    },
    {
        key: "collaborators",
        title: "Collaborateurs",
        content: [
            {
                title: "Collaborateurs",
                description: "Gérez la liste des collaborateurs de l'association."
            },
            {
                title: "Postes",
                description: "Créez et attribuez des postes sur-mesure à chacun de vos collaborateurs: directeur technique, professeur, président, trésorier, bénévole..."
            },
        ]
    },
    {
        key: "calendar",
        title: "Calendrier",
        content: [
            {
                title: "Calendrier",
                description: "Consultez depuis une interface simple le calendrier des cours/évènements passés, en cours ou à venir."
            },
            {
                title: "Cours",
                description: "Consultez, ajoutez ou modifiez les cours. Attribuez-leur les adhérents et collaborateurs collaborateurs."
            },
            {
                title: "Évènements",
                description: "Consultez, ajoutez ou modifiez les évènements. Attribuez-leur les adhérents et collaborateurs collaborateurs."
            },
            {
                title: "Fiches d'émargement",
                description: "Dématérialisez les listes d'appels et l'émargement lors des cours et événements de l'association."
            },
            {
                title: "Statistiques",
                description: "Comprenez mieux l'activité de votre association",
                tag: "dev"
            }
        ]
    },
    {
        key: "communication",
        title: "Communication",
        content: [
            {
                title: "Messagerie interne",
                description: "Créez des conversations personnelles ou de groupes pour discuter avec vos adhérents et collaborateurs.",
                tag: "new"
            },
            {
                title: "Annuaire",
                description: "Consultez la liste des fiches de contact des adhérents et des collaborateurs."
            },
            {
                title: "Annonces",
                description: "Envoyez des emails personnalisés à une liste de contacts."
            },
        ]
    },
    {
        key: "accounts",
        title: "Comptes utilisateurs",
        content: [
            {
                title: "Comptes utilisateurs",
                description: "Créez des comptes utilisateurs pour vos adhérents et collaborateurs."
            },
            {
                title: "Rôles et permissions",
                description: "Créez des rôles spécifiques pour vos adhérents et collaborateurs et adaptez l'application à leurs besoins."
            }
        ]
    }
]
