import { useRouter } from "@tanstack/react-router"
import { ReactElement } from "react"


type MainHeader = {
    children?: ReactElement
}

export function MainHeader(props: MainHeader) {
    const router = useRouter()

    const matchWithTitle = [...router.state.matches].reverse().find((d) => d.context.title)

    const title = matchWithTitle?.context.title || 'Coulba'

    return (
        <div className="w-full h-full flex justify-between items-stretch overflow-hidden gap-2 md:gap-4 p-4 md:p-8 border-b-2 border-neutral/5">
            <span className="text-2xl">{title}</span>
            {props.children}
        </div>
    )
}
