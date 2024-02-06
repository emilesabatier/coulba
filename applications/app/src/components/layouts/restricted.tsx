import { Action, Resource } from "@monassosportive/schemas/components"
import { ReactNode } from "react"
import { useAuth } from "../../hooks/useAuth"
import { AuthCard } from "./authCard"
import { Loading } from "./loading"


type Restricted = {
    resource: Resource
    action?: Action
    displayMessage?: boolean
    children: ReactNode
}

export function Restricted(props: Restricted) {
    const [auth, isLoading] = useAuth(props.resource, props.action)

    if (isLoading) return <Loading />
    if (auth) return props.children

    if (!props.displayMessage) return null
    return <AuthCard />
}
