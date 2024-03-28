import { InputCombobox } from "@coulba/design/inputs"
import { auth } from "@coulba/schemas/routes"
import { useQuery } from "@tanstack/react-query"
import * as v from "valibot"
import { readStatements } from "../../services/api/auth/statements/readStatements"
import { formatStatement } from "./format/formatStatement"


type StatementCombobox = {
    value?: string | null
    onChange: (value?: string | null) => void
    filter?: (value: v.Output<typeof auth.statements.get.return>) => boolean
    isDisabled?: boolean
    autoFocus?: boolean
}

export function StatementCombobox(props: StatementCombobox) {
    const statements = useQuery({
        queryKey: ["statements"],
        queryFn: readStatements
    })

    const options = (statements.data ?? [])
        .filter(props.filter ?? (() => true))
        .map((x) => ({
            key: x.id,
            label: formatStatement(x)
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
        />
    )
}
