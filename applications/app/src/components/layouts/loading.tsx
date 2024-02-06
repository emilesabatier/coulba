import { CircularLoader, LinearLoader } from "@monassosportive/design/layouts"
import { ReactNode } from "react"


type Loading = {
    isLoading?: boolean
    type?: "linear" | "circular" | null
    children?: ReactNode
}

export function Loading(props: Loading) {

    if (!props.isLoading) return props.children

    if (props.type === null) return null
    if (props.type === "linear") return <LinearLoader />
    return <CircularLoader />
}
