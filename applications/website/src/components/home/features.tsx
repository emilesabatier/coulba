import { cn } from "@coulba/design/services"
import { IconAccessible, IconBuilding, IconCrown, IconFiles, IconLock, IconPencilPlus, IconPigMoney, IconReportAnalytics, IconScale, IconTool, IconUsers, IconUsersGroup } from "@tabler/icons-react"


const features = [
    {
        icon: <IconAccessible />,
        title: "Simplicité d'utilisation",
        description: "Un design épuré qui met en avant seulement ce dont vous avez besoin."
    },
    {
        icon: <IconBuilding />,
        title: "Pour tous",
        description: "L'application est adaptée pour les entreprises ou pour les associations."
    },
    {
        icon: <IconScale />,
        title: "Respect des normes",
        description: "L'application est construite autour des exigences d'inaltérabilité, de sécurisation, de conservation et d'archivage des données."
    },
    {
        icon: <IconPencilPlus />,
        title: "Gestion des écritures",
        description: "Ajoutez, éditez, supprimez et simulez les écritures de manière fluide."
    },
    {
        icon: <IconFiles />,
        title: "Pièces justificatives",
        description: "Uploadez et consultez toutes vos pièces justificatives ainsi que tout autre type de documents."
    },
    {
        icon: <IconReportAnalytics />,
        title: "Documents comptables",
        description: "Consultez les divers documents de la liasse fiscale et le fichier des écritures comptables, à tout moment, de l'ouverture à la clôture de l'exercice."
    },
    {
        icon: <IconUsers />,
        title: "Partage d'accès",
        description: "Ajoutez autant d'accès utilisateurs que vous le souhaitez."
    },
    {
        icon: <IconTool />,
        title: "Configuration",
        description: "Configurez l'application en détail pour répondre à votre besoin spécifique (exercices fiscaux, journaux auxiliaires, plan des comptes, bilan ou encore compte de résultat)."
    },
    // {
    //     icon: <IconApiApp />,
    //     title: "API",
    //     description: "Disposez d'une API personnalisée pour automatiser l'ajout des écritures comptables."
    // },
    {
        icon: <IconCrown />,
        title: "Souveraineté",
        description: "Les données sont stockées sur des serveurs situés en France. Tous nos prestataires sont des entreprises française ou de l'union européennes."
    },
    {
        icon: <IconLock />,
        title: "RGPD",
        description: "Seules les données que vous saisissez sont enregistrées. Elles ne seront jamais partagées ou vendues à un tiers."
    },
    {
        icon: <IconUsersGroup />,
        title: "Amélioration collaborative",
        description: "L'application est améliorée en fonction de vos retours."
    },
    {
        icon: <IconPigMoney />,
        title: "Un prix adapté",
        description: "L'application est soumise à un tarif libre. Vous pouvez l'utiliser gratuitement ou nous aider à maintenir la solution, en fonction de vos moyens."
    }
]

export function Features() {
    return (
        <div id="fonctionnalites" className="w-full max-w-full h-full flex flex-col justify-start items-center gap-8 py-16">
            <div className="flex flex-col justify-start items-center gap-2 max-w-[768px]">
                <h2 className="text-3xl leading-none uppercase text-center">Ce que nous proposons</h2>
                <p className="text-lg text-neutral/75 text-balance text-center">Pour avoir un point de vue global et savoir si l'application répond à vos besoins.</p>
            </div>
            <div className="w-full h-full grid grid-cols-1 border border-neutral/20 rounded-md">
                {
                    features.map((feature) => {
                        return (
                            <div className={cn(
                                "min-w-[300px] w-full p-6 hover:bg-neutral/5 flex flex-col justify-start items-start gap-3",
                                "border-neutral/20 odd:border-r border-b last:border-b-0"
                            )}>
                                <div className="flex justify-start items-center gap-1.5">
                                    {feature.icon}
                                    <h3 className="text-lg text-neutral leading-none uppercase whitespace-nowrap">{feature.title}</h3>
                                </div>
                                <p className="text-neutral/75 leading-none">{feature.description}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
