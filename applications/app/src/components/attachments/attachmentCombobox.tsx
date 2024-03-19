import { InputCombobox } from "@coulba/design/inputs"
import { auth } from "@coulba/schemas/routes"
import { useQuery } from "@tanstack/react-query"
import * as v from "valibot"
import { readAttachments } from "../../services/api/auth/attachments/readAttachments"
import { formatAttachment } from "./formatAttachment"


type AttachmentCombobox = {
    value?: string | null
    onChange: (value?: string | null) => void
    filter?: (value: v.Output<typeof auth.attachments.get.return>) => boolean
    isDisabled?: boolean
    autoFocus?: boolean
}

export function AttachmentCombobox(props: AttachmentCombobox) {
    const attachments = useQuery({
        queryKey: ["attachments"],
        queryFn: readAttachments
    })

    const options = (attachments.data ?? [])
        .filter(props.filter ?? (() => true))
        .map((x) => ({
            key: x.id,
            label: formatAttachment(x)
        }))
        .sort((a, b) => a.label.localeCompare(b.label))

    return (
        <InputCombobox
            value={props.value}
            onChange={props.onChange}
            placeholder="Choisir le fichier"
            options={options}
            isDisabled={props.isDisabled}
            autoFocus={props.autoFocus}
        />
    )
}
