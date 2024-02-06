import { AccordionContent } from "@monassosportive/design/layouts"
import { ReactNode } from "react"



type FormAccordionContent = {
    children: ReactNode
}

export function FormAccordionContent(props: FormAccordionContent) {
    return (
        <AccordionContent>
            <div className="flex flex-col justify-start items-stretch gap-4 p-4">
                {props.children}
            </div>
        </AccordionContent>
    )
}
