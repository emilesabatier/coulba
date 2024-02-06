import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@monassosportive/design/layouts"
import { cn } from "@monassosportive/design/services"
import { IconChevronDown } from "@tabler/icons-react"
import { Fragment, ReactElement } from "react"
import { FromServerData } from "../../services/fetcher.service"


type Item = {
    key: string
    label: string
    value: ReactElement | string
    description?: string
}
type Header = {
    key: string
    title: string
    items: Item[]
}
type Expand<T> = {
    data: T
    headers: Header[]
}

export function Expand<T extends FromServerData>(props: Expand<T>) {
    return (
        <Accordion type="single" collapsible defaultValue={props.headers.at(0)?.key} className="flex flex-col justify-start items-stretch gap-2 overflow-hidden">
            {
                props.headers.map((header, headerIndex) => (
                    <AccordionItem key={header.key} value={header.key}>
                        <AccordionTrigger className="group">
                            <div className={cn(
                                "w-full flex justify-between items-center gap-4 p-4",
                                "group-data-[state=open]:border-none group-data-[state=open]:border-primary"
                            )}>
                                <div className="flex justify-start items-center gap-2">
                                    <span className="text-left text-sm text-neutral/25 group-data-[state=open]:text-primary/50">
                                        {headerIndex + 1}
                                    </span>
                                    <span className="text-left group-data-[state=open]:text-primary">
                                        {header.title}
                                    </span>
                                </div>
                                <div className="flex justify-end items-center gap-2 overflow-hidden">
                                    <IconChevronDown className="stroke-neutral group-data-[state=open]:-rotate-180 group-data-[state=open]:stroke-primary" size={16} />
                                </div>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="w-full grid grid-cols-[max-content_auto] auto-cols-fr items-center gap-4 p-4">
                                {
                                    header.items.map(item => (
                                        <Fragment key={item.key}>
                                            <div className="h-full flex justify-start items-start overflow-hidden">
                                                <span className="text-neutral/50 ">{item.label}</span>
                                            </div>
                                            <div>{item.value}</div>
                                        </Fragment>
                                    ))
                                }
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                ))
            }
        </Accordion>
    )
}
