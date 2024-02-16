import { useRouter } from "@tanstack/react-router"


export function MainHeader() {
    const router = useRouter()

    const matchWithTitle = [...router.state.matches].reverse().find((d) => d.context.title)

    const title = matchWithTitle?.context.title || 'Coulba'

    return (
        <div className="w-full h-full flex flex-col justify-start items-stretch overflow-hidden gap-2 md:gap-4 p-4 md:p-8 border-b-2 border-neutral/10 bg-background">
            <span className="text-3xl">{title}</span>
        </div>
    )
}
