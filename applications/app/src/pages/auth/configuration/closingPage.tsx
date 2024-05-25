import { Main } from "../../../components/layouts/main"
import { CloseYear } from "../../../components/years/closeYear"
import { DownloadDocuments } from "../../../components/years/downloadDocuments"


export function ClosingPage() {
    return (
        <Main>
            <CloseYear />
            <DownloadDocuments />
        </Main>
    )
}
