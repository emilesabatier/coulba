import { Accordion } from "@coulba/design/layouts"
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
            className="flex flex-col justify-start items-stretch gap-2 overflow-hidden"
        >
            {props.children}
        </Accordion>
    )
}
