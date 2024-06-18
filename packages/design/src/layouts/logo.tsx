import { ComponentProps } from "react"
import { LogoSvg } from "../assets/svg/logo"
import { cn } from "../services/cn"


type Logo = {
    className?: ComponentProps<'svg'>['className']
}

export function Logo(props: Logo) {
    return (
        <LogoSvg className={cn("w-auto h-[40px] max-h-full fill-neutral overflow-visible", props.className)} />
    )
}
