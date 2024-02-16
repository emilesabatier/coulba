import { ButtonGhostContent } from "@coulba/design/buttons"
import { IconArrowBack } from "@tabler/icons-react"
import { Link } from "@tanstack/react-router"
import { ValidParams, ValidRoutes } from "../../routes/router"


type BackButton = {
    to: ValidRoutes
    params: ValidParams
}

export function BackButton(props: BackButton) {
    return (
        <Link
            to={props.to}
            params={props.params}
        >
            <ButtonGhostContent
                icon={<IconArrowBack />}
            />
        </Link>

    )
}
