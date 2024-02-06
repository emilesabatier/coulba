
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip"
import { IconInfoSquare } from "@tabler/icons-react"
import { HTMLAttributes, forwardRef } from "react"
import { useFormField } from "./useFormField"


type FormLabel = {
    label?: string
    tooltip?: string
    isRequired?: boolean
}

export const FormLabel = forwardRef<
    HTMLLabelElement,
    HTMLAttributes<HTMLLabelElement> & FormLabel
>(function (props, ref) {
    const { formItemId } = useFormField()

    return (
        <label
            // {...props}
            ref={ref}
            htmlFor={formItemId}
            aria-required={props.isRequired}
            className="flex justify-start items-center gap-2"
        >
            <div className="inline-flex justify-start items-center gap-1">
                {(!props.isRequired) ? null : <span className="text-error">*</span>}
                <span className="w-fit inline-flex flex-row justify-start items-center flex-wrap text-base before:content-['\200b']">{props.label}</span>
            </div>
            {(!props.tooltip) ? null : (
                <TooltipProvider>
                    <Tooltip delayDuration={0}>
                        <TooltipTrigger className="cursor-help" onClick={(e) => e.preventDefault()} tabIndex={-1}>
                            <IconInfoSquare size={20} className="text-neutral/50 hover:text-primary hover:fill-primary/5" />
                        </TooltipTrigger>
                        <TooltipContent className="bg-neutral p-2">
                            <p className="break-words hyphens-auto text-white text-sm">{props.tooltip}</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            )}
        </label>
    )
})
