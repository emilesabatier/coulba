import { Main } from "../../../../components/layouts/main"
import { SheetsList } from "../../../../components/sheets/sheetsList"
import { useCurrentYear } from "../../../../contexts/currentYear/useCurrentYear"


export function SheetsPage() {
    const currentYear = useCurrentYear()

    if (!currentYear.data) return null
    return (
        <Main>
            <SheetsList />
        </Main>
    )
}
