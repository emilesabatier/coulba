import { Main } from "../../../../components/layouts/main/main"


export function EntryPage() {
    // const { idAccount } = useParams({ from: accountRoute.id })
    // const account = useAccount(idAccount)

    // if (!account.data) return null

    return (
        <Main.Root>
            <Main.Header />
            <Main.Content>
                <span>entrée</span>
            </Main.Content>
        </Main.Root>
    )
}
