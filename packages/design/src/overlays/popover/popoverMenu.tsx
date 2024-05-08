import { ReactElement, ReactNode, cloneElement, useState } from "react"
import { Popover, PopoverContent, PopoverTrigger } from ".."


type PopoverMenu = {
    triggerElement: ReactElement
    children: ReactNode[] | ReactNode
    align?: "center" | "start" | "end" | undefined
    side?: "bottom" | "top" | "right" | "left" | undefined
}

export function PopoverMenu(props: PopoverMenu) {
    const [open, setOpen] = useState(false)
    return (
        <Popover open={open} onOpenChange={(open) => setOpen(open)}>
            <PopoverTrigger asChild>
                {
                    cloneElement(props.triggerElement, {
                        onClick: () => {
                            setOpen(true)
                        }
                    })
                }
            </PopoverTrigger>
            {
                !open ? null : (
                    <PopoverContent
                        align={props.align ?? "start"}
                        side={props.side ?? "bottom"}
                        onInteractOutside={() => setOpen(false)}
                    >
                        <ol className="flex flex-col justify-start items-stretch p-2">
                            {Array.isArray(props.children) ? (
                                props.children.map((x, index) => (
                                    <li key={index} tabIndex={index} className="">
                                        {x}
                                    </li>
                                ))
                            ) : (
                                <li tabIndex={0} className="">
                                    {props.children}
                                </li>
                            )}
                        </ol>
                    </PopoverContent>
                )
            }
        </Popover>
    )
}
