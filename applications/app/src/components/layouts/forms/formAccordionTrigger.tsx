import { AccordionTrigger } from "@coulba/design/layouts"
import { cn } from "@coulba/design/services"
import { IconChevronDown } from "@tabler/icons-react"
import { FieldValues, Path, useFormContext } from "react-hook-form"



type FormAccordionTrigger<T extends FieldValues> = {
    index: string
    fields: Path<T>[]
    label?: string
}

export function FormAccordionTrigger<T extends FieldValues>(props: FormAccordionTrigger<T>) {
    const form = useFormContext<T>()

    function countErrors(fields: (Path<T>)[]) {
        let s = 0
        fields.forEach(field => {
            if (form.formState.errors[field]) s++
        })
        return s
    }

    const errorsNumber = countErrors(props.fields)

    return (
        <AccordionTrigger className="group">
            <div className={cn(
                "w-full flex justify-between items-center gap-4 p-4 overflow-hidden",
                "group-data-[state=open]:border-none group-data-[state=open]:border-primary"
            )}>
                <div className="flex justify-start items-start gap-2">
                    <span className="text-left text-neutral/25 group-data-[state=open]:text-primary/50">
                        {props.index}
                    </span>
                    <span className="text-left group-data-[state=open]:text-primary">
                        {props.label}
                    </span>
                </div>
                <div className="flex justify-end items-center gap-2 overflow-hidden">
                    {
                        (errorsNumber === 0) ? null : (<span className="text-xs text-error whitespace-nowrap overflow-hidden text-ellipsis">{errorsNumber} erreur(s)</span>)
                    }
                    <IconChevronDown className="stroke-neutral group-data-[state=open]:-rotate-180 group-data-[state=open]:stroke-primary" size={16} />
                </div>
            </div>
        </AccordionTrigger>
    )
}
