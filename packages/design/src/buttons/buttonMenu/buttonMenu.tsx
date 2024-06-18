import { forwardRef } from "react"
import { ButtonMenuContent } from ".."
import { cn } from "../../services"
import { Button } from "../button"


export const ButtonMenu = forwardRef<HTMLButtonElement, ButtonMenuContent & Button>(
    function (props, ref) {
        return (
            <Button
                ref={ref}
                onClick={props.onClick}
                asChild={props.asChild}
                loader={props.loader}
                className={cn("w-full min-w-[42px] group", props.className)}
                disabled={props.disabled}
                aria-label={props.text}
            >
                <ButtonMenuContent {...props} />
            </Button>
        )
    }
)
