import { InputCombobox } from "@coulba/design/inputs"
import { auth } from "@coulba/schemas/routes"
import { useQuery } from "@tanstack/react-query"
import * as v from "valibot"
import { readYears } from "../../services/api/auth/years/readYears"
import { formatYear } from "./formatYear"


type YearCombobox = {
    value?: string | null
    onChange: (value?: string | null) => void
    filter?: (value: v.Output<typeof auth.years.get.return>) => boolean
    isDisabled?: boolean
    autoFocus?: boolean
}

export function YearCombobox(props: YearCombobox) {
    const years = useQuery({
        queryKey: ["years"],
        queryFn: readYears
    })

    const options = (years.data ?? [])
        .filter(props.filter ?? (() => true))
        .map((x) => ({
            key: x.id,
            label: formatYear(x)
        }))
        .sort((a, b) => a.label.localeCompare(b.label))

    return (
        <InputCombobox
            value={props.value}
            onChange={props.onChange}
            placeholder="Choisir l'exercice"
            options={options}
            isDisabled={props.isDisabled}
            autoFocus={props.autoFocus}
        />
    )
}
