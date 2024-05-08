import { forwardRef } from "react"
import { cn } from "../../services"
import { Button } from "../button"
import { ButtonGhostContent } from "./buttonGhostContent"


export const ButtonGhost = forwardRef<HTMLButtonElement, ButtonGhostContent & Button>(
    function (props, ref) {
        return (
            <Button ref={ref} onClick={props.onClick} asChild={props.asChild} loader={props.loader} className={cn("min-w-[42px] group", props.className)} disabled={props.disabled}>
                <ButtonGhostContent
                    loading={props.loading}
                    disabled={props.disabled}
                    text={props.text}
                    icon={props.icon}
                    color={props.color}
                    className={props.className}
                />
            </Button>
        )
    }
)
