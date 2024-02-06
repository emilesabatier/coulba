import { Accordion } from "@monassosportive/design/layouts"
import { ReactNode } from "react"



type FormAccordion = {
    value?: string
    defaultValue?: string
    onValueChange?: (value: string) => void
    children: ReactNode
}

export function FormAccordion(props: FormAccordion) {
    return (
        <Accordion
            type="single"
            collapsible
            value={props.value}
            defaultValue={props.defaultValue}
            onValueChange={props.onValueChange}
            className="h-fit w-full flex flex-col justify-start items-stretch gap-2"
        >
            {props.children}
        </Accordion>
    )
}
