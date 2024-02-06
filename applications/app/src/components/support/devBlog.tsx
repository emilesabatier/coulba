import { formatDate } from "@monassosportive/design/formats"
import { Card } from "@monassosportive/design/layouts"
import { Fragment } from "react"


type TicketType = "bug" | "design" | "feature" | "ux"
type Ticket = {
    date: string
    version: string
    items: {
        type: TicketType
        description: string
    }[]
}
const tickets: Ticket[] = [
    {
        date: new Date(2023, 9, 9).toISOString(),
        version: "1.0.3",
        items: [
            {
                type: "bug",
                description: "Correction d'une erreur lors de la mise à jour d'un appel"
            },
            {
                type: "ux",
                description: "Amélioration du champ de saisie du téléphone"
            }
        ]
    },
    {
        date: new Date(2023, 9, 3).toISOString(),
        version: "1.0.2",
        items: [
            {
                type: "bug",
                description: "Correction de la saisie du numéro de téléphone pour les contacts et collaborateurs"
            },
            {
                type: "bug",
                description: "Correction de l'affichage des appels pour les évènements"
            },
            {
                type: "feature",
                description: "Ajout des notes de mise à jour sur la page d'accueil"
            },
            {
                type: "design",
                description: "Simplification de certains éléments"
            }
        ]
    }
]
const colors = {
    bug: "#d73a4a",
    feature: "#FBCA04",
    design: "#D4C5F9",
    ux: "#324ca8"
}
const types = {
    feature: "ajout",
    bug: "bug",
    design: "ui",
    ux: "ux"
}


export function DevBlog() {
    return (
        <Card className="h-fit p-4 md:p-8">
            <div className="w-full flex flex-col justify-start items-stretch gap-2 md:gap-4">
                <h2 className="text-lg font-bold">Notes de mise à jour</h2>
                <ol className="flex flex-col justify-start items-stretch gap-2">
                    {
                        tickets.map((ticket) => (
                            <Fragment key={ticket.version}>
                                <Card className="w-full px-3 py-2">
                                    <li className="w-full flex flex-col justify-start items-start gap-3">
                                        <div className="w-full flex flex-row justify-between gap-2 items-center">
                                            <span className="text-neutral/50 text-sm">
                                                version {ticket.version}
                                            </span>
                                            <span className="text-neutral text-sm uppercase">
                                                {formatDate(ticket.date)}
                                            </span>
                                        </div>
                                        <div className="grid grid-cols-[min-content_auto] gap-x-2 gap-y-2">
                                            {
                                                ticket.items.map((item, indexItem) => (
                                                    <Fragment key={indexItem}>
                                                        <span
                                                            style={{
                                                                // backgroundColor: colors[item.type] + "22",
                                                                color: colors[item.type]
                                                            }}
                                                            className="text-xs w-fit h-fit ml-auto"
                                                        >
                                                            [{types[item.type]}]
                                                        </span>
                                                        <span className="text-xs text-neutral/75 inline-flex justify-start items-center">
                                                            {item.description}
                                                        </span>
                                                    </Fragment>
                                                ))
                                            }
                                        </div>
                                    </li>
                                </Card>
                            </Fragment>
                        ))
                    }
                </ol>
            </div>
        </Card>
    )
}
