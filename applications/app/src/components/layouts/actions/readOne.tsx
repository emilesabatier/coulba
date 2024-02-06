import { ButtonGhost } from "@monassosportive/design/buttons"
import { Dialog, DialogContent, DialogTrigger } from "@monassosportive/design/overlays"
import { IconX } from "@tabler/icons-react"
import { ReactElement, ReactNode, Ref, cloneElement, useState } from "react"


type ReadOne = {
    id: string
    triggerElement: ReactElement
    title: string
    children: ReactNode
    fRef?: Ref<HTMLButtonElement>
}

export function ReadOne(props: ReadOne) {
    const [open, setOpen] = useState(false)
    return (
        <Dialog key={props.id} modal open={open} onOpenChange={(open) => setOpen(open)}>
            <DialogTrigger asChild>
                {cloneElement(props.triggerElement, {
                    onClick: () => setOpen(true), ref: props.fRef
                })}
            </DialogTrigger>
            {
                !open ? null : (
                    <DialogContent onInteractOutside={() => setOpen(false)} className="h-full overflow-hidden">
                        <div className="w-full h-full grid grid-rows-[min-content_auto_min-content]">
                            <div className="flex justify-between items-center gap-2 overflow-hidden p-4">
                                <span className="text-xl overflow-hidden whitespace-nowrap text-ellipsis">{props.title}</span>
                                <ButtonGhost
                                    icon={<IconX />}
                                    onClick={() => setOpen(false)}
                                />
                            </div>
                            <div className="h-full w-full overflow-auto p-2 md:p-4" children={props.children} />
                        </div>
                    </DialogContent>
                )
            }
        </Dialog>
    )
}
