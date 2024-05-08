import { Slot } from "@radix-ui/react-slot"
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react"
import { useFormField } from "./useFormField"


export const FormControl = forwardRef<
    ElementRef<typeof Slot>,
    ComponentPropsWithoutRef<typeof Slot>
>(function (props, ref) {
    const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

    return (
        <Slot
            {...props}
            ref={ref}
            id={formItemId}
            aria-describedby={
                !error
                    ? `${formDescriptionId}`
                    : `${formDescriptionId} ${formMessageId}`
            }
            aria-invalid={!!error}
        />
    )
})
