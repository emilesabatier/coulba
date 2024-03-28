import { Main } from "../../../../components/layouts/main/main"
import { SheetsList } from "../../../../components/sheets/sheetsList"
import { useCurrentYear } from "../../../../contexts/currentYear/useCurrentYear"


export function SheetsPage() {
    const currentYear = useCurrentYear()

    if (!currentYear.data) return null
    return (
        <Main.Root>
            <Main.Header
                title="Modèle du bilan"
                description="Vous retrouvez sur cette page le modèle du bilan de l'entreprise que vous pouvez modifier selon votre besoin. Veuillez à bien savoir ce que vous faites avant de supprimer des données."
            />
            <Main.Content>
                <SheetsList />
            </Main.Content>
        </Main.Root>
    )
}
