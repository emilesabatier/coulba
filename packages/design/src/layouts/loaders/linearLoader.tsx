import { ComponentProps } from "react"
import { cn } from "../../services"


type LinearLoader = {
    className?: ComponentProps<'div'>['className']
}

export function LinearLoader(props: LinearLoader) {
    return (
        <div className="relative w-full h-1 rounded-sm overflow-hidden">
            <div
                className={cn(
                    "w-full h-full bg-primary rounded-sm animate-pulse",
                    props.className
                )}
            />
        </div>
    )
}
