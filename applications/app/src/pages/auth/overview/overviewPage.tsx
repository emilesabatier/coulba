import { Main } from "../../../components/layouts/main/main"
import { LastAttachments } from "../../../components/overview/lastAttachments"
import { LastTransactions } from "../../../components/overview/lastTransactions"
import { UsefulLinks } from "../../../components/overview/usefulLinks"


export function OverviewPage() {
    return (
        <Main.Root>
            <Main.Header
                title="Vue d'ensemble"
                description="Pour rapidement voir ce qui concerne votre activité sur l'application"
            >
            </Main.Header>
            <Main.Content className="flex-row flex-wrap">
                <UsefulLinks />
                <LastTransactions />
                <LastAttachments />
            </Main.Content>
        </Main.Root>
    )
}
