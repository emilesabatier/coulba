import { ComponentProps } from "react"
import { Button } from "../../buttons"
import { toast } from "../../overlays"
import { FormatBase } from "../formatBase"
import { FormatNull } from "../null/formatNull"


type FormatLinkProps = {
    text: string | null | undefined
    className?: ComponentProps<'span'>['className']
}

export function FormatLink(props: FormatLinkProps) {
    if (!props.text) return <FormatNull />

    const copyContent = (toCopy: string | null | undefined) => {
        toast({ title: "Contenu copié dans le presse-papier.", variant: "information" })
        return navigator.clipboard.writeText(!toCopy ? "" : toCopy)
    }

    return (
        <FormatBase className={props.className}>
            <Button
                onClick={() => copyContent(props.text)}
                className="w-full overflow-hidden rounded-none"
            >
                <span className="text-left underline hover:no-underline max-w-full break-normal whitespace-nowrap overflow-hidden text-ellipsis">
                    {props.text}
                </span>
            </Button>
        </FormatBase>
    )
}
