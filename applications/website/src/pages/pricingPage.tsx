

import { useEffect } from "react"
import { Main } from "../components/layout/main/main"
import { PricingContent } from "../components/pricing/pricingContent"


export function PricingPage() {

    useEffect(() => { document.title = "Tarif | MonAssoSportive" }, [])

    return (
        <Main.Root>
            <Main.Header
                title="Un prix transparent et flexible"
                description="Adapté à votre association."
            />
            <Main.Content>
                <PricingContent />
            </Main.Content>
        </Main.Root>
    )
}
