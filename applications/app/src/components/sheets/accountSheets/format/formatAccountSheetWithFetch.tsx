import { FormatNull, FormatText } from "@coulba/design/formats"
import { CircularLoader } from "@coulba/design/layouts"
import { auth } from "@coulba/schemas/routes"
import { useQuery } from "@tanstack/react-query"
import * as v from "valibot"
import { accountSheetOptions } from "../../../services/api/auth/accountSheets/accountSheetsOptions"
import { ErrorMessage } from "../../layouts/errorMessage"
import { formatAccountSheet } from "./formatAccountSheetSheet"


type FormatAccountSheetWithFetch = {
    idAccountSheet: v.Output<typeof auth.accountSheets.get.return>["id"]
}

export function FormatAccountSheetWithFetch(props: FormatAccountSheetWithFetch) {
    const accountSheet = useQuery(accountSheetOptions(props.idAccountSheet))

    if (accountSheet.isLoading) return (<CircularLoader />)
    if (accountSheet.isError) return <ErrorMessage message={accountSheet.error.message} />
    if (!accountSheet.data) return <FormatNull />
    return <FormatText text={formatAccountSheet(accountSheet.data)} />
}
