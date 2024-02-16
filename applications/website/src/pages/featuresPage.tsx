

import { useEffect } from "react"
import { FeaturesContent } from "../components/features/featuresContent"
import { Main } from "../components/layout/main/main"


export function FeaturesPage() {

    useEffect(() => { document.title = "Fonctionnalités | MonAssoSportive" }, [])

    return (
        <Main.Root>
            <Main.Header
                title="Les bénéfices du numériques pour votre association"
                description="Découvrez une solution web complète conçue spécialement pour accompagner les associations dans leur transition numérique et simplifier leur gestion au quotidien."
            />
            <Main.Content>
                <FeaturesContent />
            </Main.Content>
        </Main.Root>
    )
}
