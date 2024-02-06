import { DashboardAccount } from "@monassosportive/schemas/routes"
import { ReactElement, forwardRef } from "react"
import { ReadOne } from "../../layouts/actions/readOne"
import { Restricted } from "../../layouts/restricted"
import { Expand } from "../../layouts/expand"
import { accountData } from "../account.data"

type ReadOneAccount = {
    children: ReactElement
    account: DashboardAccount.ReadOneAccountReturn
}

export const ReadOneAccount = forwardRef<HTMLButtonElement, ReadOneAccount>(
    function (props, ref) {
        return (
            <Restricted
                resource="account"
                action="read"
            >
                <ReadOne
                    id={props.account.id}
                    fRef={ref}
                    triggerElement={props.children}
                    title="Compte"
                >
                    <Expand<DashboardAccount.ReadOneAccountReturn>
                        data={props.account}
                        headers={accountData(props.account)}
                    />
                </ReadOne>
            </Restricted>
        )
    }
)
