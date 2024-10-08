import { ButtonPlain } from "@coulba/design/buttons"
import { FormatNull } from "@coulba/design/formats"
import { CircularLoader } from "@coulba/design/layouts"
import { cn } from "@coulba/design/services"
import { auth } from "@coulba/schemas/routes"
import { IconPlus } from "@tabler/icons-react"
import { useQuery } from "@tanstack/react-query"
import { ComponentProps, Fragment } from "react"
import * as v from "valibot"
import { accountsOptions } from "../../services/api/auth/accounts/accountsOptions"
import { ErrorMessage } from "../layouts/errorMessage"
import { Section } from "../layouts/section/section"
import { CreateAccount } from "./create/createAccount"
import { ReadAccount } from "./read/readAccount"


type GroupedAccount = {
    account: v.Output<typeof auth.accounts.get.return>
    subAccounts: GroupedAccount[]
}

function groupAccounts(accounts: v.Output<typeof auth.accounts.get.return>[], digits: number) {
    if (accounts.length === 0) return []
    return accounts
        .filter((account) => account.number.toString().length === digits)
        .map((account) => {
            const subAccounts = groupAccounts(accounts.filter((_account) => _account.number.toString().slice(0, digits) === account.number.toString().slice(0, digits)), digits + 1) as GroupedAccount[]
            return ({
                account: account,
                subAccounts: subAccounts
            })
        }) as GroupedAccount[]
}

export function AccountsList() {
    const accounts = useQuery(accountsOptions)

    const groupedAccounts = groupAccounts(accounts.data ?? [], 1)
        .sort((a, b) => a.account.number.toString().localeCompare(b.account.number.toString()))

    if (accounts.isLoading) return <CircularLoader className="m-3" />
    if (accounts.isError) return <ErrorMessage message={accounts.error.message} />
    if (!accounts.data) return null
    return (
        <Section.Root>
            <Section.Item>
                <CreateAccount>
                    <ButtonPlain
                        icon={<IconPlus />}
                        text="Ajouter un compte"
                    />
                </CreateAccount>
            </Section.Item>
            <Section.Item>
                <div className="w-full flex flex-col justify-start items-stretch rounded-md border border-neutral/10">
                    {
                        (groupedAccounts.length > 0) ?
                            groupedAccounts.map((groupedAccount) => (
                                <AccountItem
                                    key={groupedAccount.account.id}
                                    groupedAccount={groupedAccount}
                                    level={0}
                                />
                            ))
                            : (
                                <FormatNull className="p-3" />
                            )
                    }
                </div>
            </Section.Item>
        </Section.Root>
    )
}



type AccountItem = {
    groupedAccount: GroupedAccount
    level: number
    className?: ComponentProps<'div'>['className']
}

function AccountItem(props: AccountItem) {
    return (
        <Fragment>
            <ReadAccount idAccount={props.groupedAccount.account.id} className="w-full border-b border-neutral/5 last:border-b-0">
                <div
                    className="w-full flex justify-start items-start gap-1.5 p-3 hover:bg-neutral/5"
                    style={{
                        paddingLeft: `${(1 + props.level) * 12}px`
                    }}
                >
                    <span className={cn(
                        "text-neutral font-bold",
                        props.groupedAccount.account.isMandatory ? "" : ""
                    )}>
                        {props.groupedAccount.account.number}
                    </span>
                    <span className={cn(
                        "text-neutral text-left",
                        props.groupedAccount.account.isMandatory ? "" : ""
                    )}>
                        {props.groupedAccount.account.label}
                    </span>
                </div>
            </ReadAccount>
            {
                props.groupedAccount.subAccounts
                    .sort((a, b) => a.account.number.toString().localeCompare(b.account.number.toString()))
                    .map((groupedSubAccount) => (
                        <AccountItem
                            key={groupedSubAccount.account.id}
                            groupedAccount={groupedSubAccount}
                            level={props.level + 1}
                        />
                    ))
            }
        </Fragment>
    )
}
