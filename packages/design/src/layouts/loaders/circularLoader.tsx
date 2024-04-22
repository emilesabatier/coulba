import { ComponentProps } from "react"
import { cn } from "../../services/cn"


type CircularLoader = {
    className?: ComponentProps<'div'>['className']
    size?: number
}

export function CircularLoader(props: CircularLoader) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.size || 16}
            height={props.size || 16}
            viewBox="0 0 50 50"
            className={cn("animate-spin fill-neutral", props.className)}
        >
            <path d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z" />
        </svg>
    )
}
