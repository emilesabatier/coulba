import { ButtonOutline } from "@coulba/design/buttons"
import { useDeviceDetect } from "@coulba/design/hooks"
import { Popover, PopoverContent, PopoverTrigger } from "@coulba/design/overlays"
import { useNavigate, useRouter } from "@tanstack/react-router"
import { ReactElement, useRef, useState } from "react"
import { ValidRoutes } from "../../../routes/router"
import { NavigationButton } from "./navigationButton"


type SubNavigation = {
    routes: {
        title: string
        icon: ReactElement
        path: ValidRoutes
    }[]
}

export function SubNavigation(props: SubNavigation) {
    const navigate = useNavigate()
    const { isMobile } = useDeviceDetect()
    const [isOpen, setIsOpen] = useState(false)
    const triggerRef = useRef<HTMLButtonElement>(null)

    const router = useRouter()
    const current = router.state.matches.at(-1)

    if (isMobile) return (
        <div className="w-full h-full overflow-auto">
            <Popover open={isOpen} onOpenChange={(open) => setIsOpen(open)} >
                <PopoverTrigger asChild>
                    <ButtonOutline
                        icon={current?.context.icon}
                        text={current?.context.label}
                        onClick={() => setIsOpen(true)}
                        ref={triggerRef}
                        className="w-full"
                    />
                </PopoverTrigger>
                <PopoverContent
                    side='top'
                    align='center'
                    sideOffset={4}
                    onInteractOutside={() => setIsOpen(false)}
                >
                    <ol className="w-full h-full flex flex-col justify-start items-stretch gap-1">
                        {
                            props.routes.map((route) => {
                                return (
                                    <li
                                        key={route.path}
                                        className="w-full"
                                    >
                                        <NavigationButton
                                            key={route.path}
                                            title={route.title}
                                            icon={route.icon}
                                            onClick={() => navigate({ to: route.path, params: {} })}
                                            isActive={current?.context.subNavigationParent === route.path}
                                        />
                                    </li>
                                )
                            })
                        }
                    </ol>
                </PopoverContent>
            </Popover>
        </div>
    )
    return (
        <div className="w-full h-fit overflow-auto">
            <ol className="w-full h-fit flex justify-start items-stretch gap-1">
                {
                    props.routes.map((route) => {
                        return (
                            <li
                                key={route.path}
                                className="w-fit"
                            >
                                <NavigationButton
                                    key={route.path}
                                    title={route.title}
                                    icon={route.icon}
                                    onClick={() => navigate({ to: route.path, params: {} })}
                                    isActive={current?.context.subNavigationParent === route.path}
                                />
                            </li>
                        )
                    })
                }
            </ol>
        </div>
    )
}
