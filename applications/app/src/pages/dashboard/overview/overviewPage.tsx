import { Main } from "../../../components/layouts/main/main"
import { Page } from "../../../components/layouts/page/page"
import { ContactBanner } from "../../../components/overview/contactBanner"
import { DataOverview } from "../../../components/overview/dataOverview"


export function OverviewPage() {
    return (
        <Page.Root id="overview">
            <Page.Header />
            <Page.Main>
                <Page.Navigation />
                <Page.Content>
                    <Main.Root>
                        <Main.Content>
                            <div className="w-full flex justify-start items-start flex-wrap gap-2 md:gap-4 p-2 md:p-4">
                                <DataOverview />
                                <ContactBanner />
                            </div>
                        </Main.Content>
                    </Main.Root>
                </Page.Content>
            </Page.Main>
        </Page.Root>
    )
}
