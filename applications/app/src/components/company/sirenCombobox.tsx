import { InputCombobox } from "@coulba/design/inputs"
import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"


type SirenCombobox = {
    value?: string | null
    onChange: (value?: string | null) => void
    filter?: (value: v.Output<typeof auth.accounts.get.return>) => boolean
    isDisabled?: boolean
    autoFocus?: boolean
}

export function SirenCombobox(props: SirenCombobox) {

    const companies = []

    const options = (companies ?? [])
        .filter(props.filter ?? (() => true))
        .map((x) => ({
            key: x.id,
            label: x
        }))
        .sort((a, b) => a.label.localeCompare(b.label))

    return (
        <InputCombobox
            value={props.value}
            onChange={props.onChange}
            placeholder="Entrer le numéro de SIREN"
            options={options}
            isDisabled={props.isDisabled}
            autoFocus={props.autoFocus}
        />
    )
}
