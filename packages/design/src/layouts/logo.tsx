import { ComponentProps } from "react"
import { LogoMAS } from "../assets/svg/logoMAS"
import { cn } from "../services/cn"


type Logo = {
    className?: ComponentProps<'svg'>['className']
}

export function Logo(props: Logo) {
    return (
        <div className="h-[40px] w-fit flex justify-center items-center">
            <LogoMAS className={cn("w-auto h-full fill-primary overflow-visible", props.className)} />
        </div>
    )
}
