import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@monassosportive/design/overlays"
import { IconInfoSquareRounded } from "@tabler/icons-react"
import { ReactElement } from "react"


type DataBlockItem = {
    label: string
    description?: string
    children: string | ReactElement
}

export function DataBlockItem(props: DataBlockItem) {
    return (
        <div className="basis-full md:basis-1/4 flex flex-col justify-start items-start gap-1">
            <div className="flex justify-start items-center gap-2">
                <span className="uppercase text-neutral/30 text-sm">{props.label}</span>
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
            <div className="max-w-full">
                {
                    !(props.children instanceof String) ? props.children :
                        (
                            <span>{props.children}</span>
                        )
                }
            </div>
        </div>
    )
}
