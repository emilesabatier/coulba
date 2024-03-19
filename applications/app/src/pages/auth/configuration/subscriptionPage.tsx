import { Main } from "../../../components/layouts/main/main"


export function SubscriptionPage() {
    return (
        <Main.Root>
            <Main.Header
                title="Abonnement"
                description="Vous retrouvez sur cette page le détail de votre abonnement et des différents paiements."
            />
            <Main.Content>
                <p>L'application est actuellement en <b>beta</b>. L'accès est gratuit avant la sortie de la version v1.0.0.</p>
            </Main.Content>
        </Main.Root>
    )
}
