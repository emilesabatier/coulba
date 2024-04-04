import { InputCombobox } from "@coulba/design/inputs"
import { auth } from "@coulba/schemas/routes"
import { useQuery } from "@tanstack/react-query"
import * as v from "valibot"
import { readSheets } from "../../services/api/auth/sheets/readSheets"
import { formatSheet } from "./format/formatSheet"


type SheetCombobox = {
    value?: string | null
    onChange: (value?: string | null) => void
    filter?: (value: v.Output<typeof auth.sheets.get.return>) => boolean
    isDisabled?: boolean
    autoFocus?: boolean
}

export function SheetCombobox(props: SheetCombobox) {
    const sheets = useQuery({
        queryKey: ["sheets"],
        queryFn: readSheets
    })

    const options = (sheets.data ?? [])
        .filter(props.filter ?? (() => true))
        .map((x) => ({
            key: x.id,
            label: formatSheet(x)
        }))
        .sort((a, b) => a.label.localeCompare(b.label))

    return (
        <InputCombobox
            value={props.value}
            onChange={props.onChange}
            placeholder="Choisir la ligne"
            options={options}
            isDisabled={props.isDisabled}
            autoFocus={props.autoFocus}
            isLoading={sheets.isLoading}
        />
    )
}
