import { forwardRef } from "react"
import { ButtonOutlineContent } from ".."
import { cn } from "../../services"
import { Button } from "../button"


export const ButtonOutline = forwardRef<HTMLButtonElement, ButtonOutlineContent & Button>(
    function (props, ref) {
        return (
            <Button ref={ref} onClick={props.onClick} asChild={props.asChild} loader={props.loader} className={cn("min-w-[42px] group", props.className)} disabled={props.disabled}>
                <ButtonOutlineContent {...props} />
            </Button>
        )
    }
)
