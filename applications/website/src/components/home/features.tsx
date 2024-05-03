import { IconAccessible, IconApiApp, IconCrown, IconFiles, IconLock, IconPencilPlus, IconReportAnalytics, IconScale, IconTool, IconUsers } from "@tabler/icons-react"


const features = [
    {
        icon: <IconAccessible />,
        title: "Simplicité d'utilisation",
        description: "Un design épuré qui met en avant seulement ce dont vous avez besoin."
    },
    {
        icon: <IconScale />,
        title: "Respect des normes",
        description: "L'application est construite autour des exigences d'inaltérabilité, de sécurisation, de conservation et d'archivage des données."
    },
    {
        icon: <IconPencilPlus />,
        title: "Enregistrements",
        description: "Ajoutez, éditez et supprimez les enregistrements de manière fluide et sécurisé, avant validation et inscription définitive dans le journal."
    },
    {
        icon: <IconFiles />,
        title: "Pièces justificatives",
        description: "Uploadez et consultez toutes les pièces justificatives nécessaires."
    },
    {
        icon: <IconReportAnalytics />,
        title: "Documents comptables",
        description: "Consultez les divers documents de la liasse fiscale et le fichier des écritures comptables, à tout moment, de l'ouverture à la clôture de l'exercice."
    },
    {
        icon: <IconUsers />,
        title: "Partage d'accès",
        description: "Ajoutez autant d'accès utilisateurs que vous le souhaitez, pour vos associés par exemple."
    },
    {
        icon: <IconTool />,
        title: "Configuration",
        description: "Configurez les détails de vos exercices fiscaux, des journaux et du plan des comptes pour répondre à votre besoin spécifique."
    },
    {
        icon: <IconApiApp />,
        title: "API",
        description: "Disposez d'une API personnalisée pour automatiser l'ajout des enregistrements comptables."
    },
    {
        icon: <IconCrown />,
        title: "Souveraineté",
        description: "Les données sont stockées sur des serveurs en France. Tous nos prestataires sont des entreprises française ou de l'union européennes."
    },
    {
        icon: <IconLock />,
        title: "RGPD",
        description: "Seules certaines données sont collectées et dans un seul but d'utilisation interne d'amélioration du produit. Elle ne seront jamais partagées à un tiers."
    }
]

export function Features() {
    return (
        <div id="fonctionnalites" className="w-full max-w-full h-full flex flex-col justify-start items-center gap-8 py-16">
            <div className="flex flex-col justify-start items-center gap-2 max-w-[768px]">
                <h2 className="text-3xl leading-none uppercase text-center">Nos fonctionnalités</h2>
                <p className="text-lg text-neutral/75 text-balance text-center">Pour avoir un point de vue global et savoir si l'application répond à vos besoins.</p>
            </div>
            <div className="w-full h-full gap-2 flex flex-wrap justify-center items-stretch">
                {
                    features.map((feature) => {
                        return (
                            <div className="min-w-[300px] w-full max-w-[600px] border border-neutral/20 rounded-md p-2 md:p-4 hover:shadow-sm flex flex-col justify-start items-start gap-2 md:gap-4">
                                <div className="flex justify-start items-center gap-2">
                                    {feature.icon}
                                    <h3 className="text-lg leading-none uppercase whitespace-nowrap">{feature.title}</h3>
                                </div>
                                <p className="text-neutral/75">{feature.description}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
