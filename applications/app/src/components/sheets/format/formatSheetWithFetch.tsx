import { FormatNull, FormatText } from "@coulba/design/formats"
import { CircularLoader } from "@coulba/design/layouts"
import { auth } from "@coulba/schemas/routes"
import { useQuery } from "@tanstack/react-query"
import * as v from "valibot"
import { sheetOptions } from "../../../services/api/auth/sheets/sheetsOptions"
import { ErrorMessage } from "../../layouts/errorMessage"
import { formatSheet } from "./formatSheet"


type FormatSheetWithFetch = {
    idSheet: v.Output<typeof auth.sheets.get.return>["id"]
}

export function FormatSheetWithFetch(props: FormatSheetWithFetch) {
    const sheet = useQuery(sheetOptions(props.idSheet))

    if (sheet.isLoading) return (<CircularLoader />)
    if (sheet.isError) return <ErrorMessage message={sheet.error.message} />
    if (!sheet.data) return <FormatNull />
    return <FormatText text={formatSheet(sheet.data)} />
}
