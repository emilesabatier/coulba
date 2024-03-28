import { FormatNull, FormatText } from "@coulba/design/formats"
import { CircularLoader } from "@coulba/design/layouts"
import { auth } from "@coulba/schemas/routes"
import { useQuery } from "@tanstack/react-query"
import * as v from "valibot"
import { statementOptions } from "../../../services/api/auth/statements/statementsOptions"
import { ErrorMessage } from "../../layouts/errorMessage"
import { formatStatement } from "./formatStatement"


type FormatStatementWithFetch = {
    idStatement: v.Output<typeof auth.statements.get.return>["id"]
}

export function FormatStatementWithFetch(props: FormatStatementWithFetch) {
    const statement = useQuery(statementOptions(props.idStatement))

    if (statement.isLoading) return (<CircularLoader />)
    if (statement.isError) return <ErrorMessage message={statement.error.message} />
    if (!statement.data) return <FormatNull />
    return <FormatText text={formatStatement(statement.data)} />
}
