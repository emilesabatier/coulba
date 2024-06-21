import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@coulba/design/overlays"
import { IconInfoSquareRounded } from "@tabler/icons-react"
import { Fragment, ReactElement } from "react"


type DataBlockItem = {
    label: string
    description?: string
    children: string | ReactElement
}

export function DataBlockItem(props: DataBlockItem) {
    return (
        <Fragment>
            <div className="flex justify-start items-start gap-1.5">
                <span className="uppercase text-xs leading-6 text-neutral/50">{props.label}</span>
                {
                    (!props.description) ? null : (
                        <TooltipProvider>
                            <Tooltip delayDuration={0}>
                                <TooltipTrigger className="cursor-help" onClick={(e) => e.preventDefault()}>
                                    <IconInfoSquareRounded size={16} strokeWidth={1} className="stroke-neutral/50 hover:stroke-primary hover:fill-primary/5" />
                                </TooltipTrigger>
                                <TooltipContent className="bg-neutral">
                                    <p className="break-words hyphens-auto text-white text-sm">{props.description}</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    )
                }
            </div>
            <div className="flex justify-start items-start gap-2">
                {
                    !(props.children instanceof String) ? props.children :
                        (
                            <span>{props.children}</span>
                        )
                }
            </div>
        </Fragment>
    )
}
