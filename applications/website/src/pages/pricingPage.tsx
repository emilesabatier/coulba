

import { useEffect } from "react"
import { Main } from "../components/layout/main/main"


export function PricingPage() {

    useEffect(() => { document.title = "Tarif" }, [])

    return (
        <Main.Root>
            <Main.Header
                title="Tarif"
            />
            <Main.Content>
                <p>todo</p>
            </Main.Content>
        </Main.Root>
    )
}
