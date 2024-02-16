import { Card } from "@coulba/design/layouts"
import { ReactNode } from "react"
import { CreateOneTicket } from "../support/contactSupport/createOneTicket/createOneTicket"
import { Loading } from "./loading"


type Placeholder = {
    error?: Error
    isLoading?: boolean
    loadingType?: "linear" | "circular" | null
    children?: ReactNode
}

export function Placeholder(props: Placeholder) {

    if (props.isLoading) return (
        <Loading
            isLoading={props.isLoading}
            type={props.loadingType}
        />
    )

    if (props.error === undefined) return props.children

    return (
        <Card variant="error" className="p-4 h-fit flex flex-col justify-start items-stretch">
            <p className="text-error font-bold">{props.error.message ?? "Erreur avec le serveur."}</p>
            <p className="text-error text-sm">
                Veuillez vérifier votre connexion internet et rafraîchir la page.
            </p>
            <p className="text-error mt-4">
                Si le problème persiste, n&apos;hésitez pas à contacter le&nbsp;
                <CreateOneTicket>
                    <span className="text-error underline cursor-pointer hover:no-underline">
                        support
                    </span>
                </CreateOneTicket>
                .
            </p>
        </Card>
    )
}
