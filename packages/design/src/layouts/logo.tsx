import { ComponentProps } from "react"
import { LogoSvg } from "../assets/svg/logo"
import { cn } from "../services/cn"


type Logo = {
    className?: ComponentProps<'svg'>['className']
}

export function Logo(props: Logo) {
    return (
        <LogoSvg className={cn("h-full w-fit fill-neutral overflow-visible", props.className)} />
    )
}
