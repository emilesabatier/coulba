import { Fragment } from "react"
import { DisplayVersion } from "./displayVersion"
import { Navigation } from "./navigation"


export function DesktopNavigation() {
    return (
        <Fragment>
            <Navigation />
            <DisplayVersion />
        </Fragment>
    )
}
