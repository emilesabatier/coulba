import { Main } from "../../../components/layouts/main/main"
import { Page } from "../../../components/layouts/page/page"


export function OverviewPage() {
    return (
        <Page.Root id="overview">
            <Page.Header />
            <Page.Content>
                <Main.Root>
                    <Main.Header />
                    <Main.Content>
                        <span>overview</span>
                    </Main.Content>
                </Main.Root>
            </Page.Content>
        </Page.Root>
    )
}
