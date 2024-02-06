import { ReactElement } from "react"
import { ValidRoutes } from "../../../routes/router"
import { SubNavigation } from "../navigation/subNavigation"


type MainNavigation = {
    routes: {
        title: string
        icon: ReactElement
        path: ValidRoutes
    }[]
}

export function MainNavigation(props: MainNavigation) {
    if (!props.routes || props.routes.length === 0) return null
    return (
        <div className="shrink-0 h-fit w-full overflow-auto order-1 md:-order-1 border-b border-background p-2 md:p-4">
            <SubNavigation
                routes={props.routes}
            />
        </div>
    )
}
