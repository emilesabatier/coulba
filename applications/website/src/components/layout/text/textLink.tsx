import { cn } from "@coulba/design/services"
import { ComponentProps, ReactElement } from "react"


type TextParagraph = {
    className?: ComponentProps<'a'>['className']
    href: string
    children: ReactElement | ReactElement[] | string
}

export function TextLink(props: TextParagraph) {
    return (
        <a
            className={cn(
                "underline hover:no-underline",
                props.className
            )}
            href={props.href}
            target="_blank"
            rel="noopener noreferrer"
            children={props.children}
        />
    )
}
