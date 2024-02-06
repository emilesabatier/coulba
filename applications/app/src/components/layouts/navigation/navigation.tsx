import { FormatNull } from "@monassosportive/design/formats"
import { CircularLoader } from "@monassosportive/design/layouts"
import { cn } from "@monassosportive/design/services"
import { ComponentProps } from "react"
import { useApplications } from "../../../hooks/useApplications"
import { NavigationButton } from "./navigationButton"


type Navigation = {
    onAfterClick?: () => void
    className?: ComponentProps<'div'>['className']
}

export function Navigation(props: Navigation) {
    const [applicationGroups, isLoading] = useApplications()

    function onMenuClick(onClick: () => void) {
        onClick()
        if (!props.onAfterClick) return
        props.onAfterClick()
    }

    return (
        <div className={cn("min-w-fit w-full max-w-full h-fit", props.className)}>
            <ol className="min-w-fit w-full max-w-full h-fit flex flex-col justify-start items-stretch gap-2">
                {isLoading ? (
                    <div className="w-full flex justify-center items-center py-2 px-3">
                        <CircularLoader />
                    </div>
                ) : null}
                {(!isLoading && applicationGroups.filter(x => x.routes.some(y => y.isVisible)).length === 0) ? (
                    <li className="w-full flex flex-col justify-start items-stretch gap-2 p-2">
                        <FormatNull text="Aucune fonctionnalité disponible" />
                    </li>
                ) : null}
                {isLoading ? null : (
                    applicationGroups.map((applicationGroup) => {
                        if (!applicationGroup.routes.some(x => x.isVisible)) return null
                        return (
                            <li key={applicationGroup.key} className="w-full flex flex-col justify-start items-stretch gap-2">
                                <span className="uppercase text-xs text-neutral/25">{applicationGroup.label}</span>
                                <ol className="w-full h-full flex flex-col justify-start items-stretch gap-1">
                                    {
                                        applicationGroup.routes.map(_route => (
                                            <li
                                                key={_route.key}
                                                className="w-full"
                                            >
                                                <NavigationButton
                                                    key={_route.key}
                                                    title={_route.title}
                                                    icon={_route.icon}
                                                    onClick={() => onMenuClick(_route.onClick)}
                                                    isActive={_route.isActive}
                                                />
                                            </li>
                                        ))
                                    }
                                </ol>
                            </li>
                        )
                    })
                )
                }
            </ol>
        </div>
    )
}
