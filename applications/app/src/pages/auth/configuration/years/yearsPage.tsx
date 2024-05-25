import { Main } from "../../../../components/layouts/main"
import { SwitchYear } from "../../../../components/years/switchYear"
import { YearsList } from "../../../../components/years/yearsList"


export function YearsPage() {
    return (
        <Main>
            <SwitchYear />
            <YearsList />
        </Main>
    )
}
