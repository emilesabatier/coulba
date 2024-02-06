import { forwardRef } from "react"
import { ButtonSubtleContent } from ".."
import { cn } from "../../services"
import { Button } from "../button"


export const ButtonSubtle = forwardRef<HTMLButtonElement, ButtonSubtleContent & Button>(
    function (props, ref) {
        return (
            <Button ref={ref} onClick={props.onClick} asChild={props.asChild} loader={props.loader} className={cn("min-w-[42px] group", props.className)} disabled={props.disabled}>
                <ButtonSubtleContent {...props} />
            </Button>
        )
    }
)
