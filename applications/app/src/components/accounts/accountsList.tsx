import { ButtonGhost } from "@coulba/design/buttons"
import { FormatNull } from "@coulba/design/formats"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@coulba/design/layouts"
import { cn } from "@coulba/design/services"
import { auth } from "@coulba/schemas/routes"
import { IconChevronDown, IconPencil, IconTrash } from "@tabler/icons-react"
import { useQuery } from "@tanstack/react-query"
import { ComponentProps } from "react"
import * as v from "valibot"
import { accountOptions } from "../../services/api/auth/accounts/accountsOptions"
import { ErrorMessage } from "../layouts/errorMessage"
import { Loading } from "../layouts/loading"
import { DeleteAccount } from "./deleteAccount/deleteAccount"
import { UpdateAccount } from "./updateAccount/updateAccount"


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
    const accounts = useQuery(accountOptions)

    const groupedAccounts = groupAccounts(accounts.data ?? [], 1)
        .sort((a, b) => a.account.number.toString().localeCompare(b.account.number.toString()))

    if (accounts.isPending) return <Loading />
    if (accounts.isError) return <ErrorMessage message={accounts.error.message} />
    return (
        <div className="w-full h-full flex flex-col justify-start items-stretch gap-2 overflow-auto border border-neutral/25 rounded-sm p-4">
            <Accordion type="multiple">
                {
                    (groupedAccounts.length === 0) ? (<FormatNull />) : groupedAccounts.map((groupedAccount) => (
                        <AccountItem
                            key={groupedAccount.account.id}
                            groupedAccount={groupedAccount}
                            className="pl-0"
                        />
                    ))
                }
            </Accordion>
        </div>
    )
}



type AccountItem = {
    groupedAccount: GroupedAccount
    className?: ComponentProps<'div'>['className']
}

function AccountItem(props: AccountItem) {
    const hasSubAccounts = props.groupedAccount.subAccounts.length > 0

    return (
        <AccordionItem
            disabled={!hasSubAccounts}
            value={props.groupedAccount.account.id}
            className={cn(
                "pl-4",
                props.className
            )}
        >
            <div className="flex justify-between items-center gap-4 hover:bg-background rounded-sm">
                <AccordionTrigger className="w-full flex justify-start items-center ">
                    <div className="flex justify-start items-center gap-2 p-2">
                        <h2>{props.groupedAccount.account.number}</h2>
                        <span className="text-neutral/50">{props.groupedAccount.account.label}</span>
                    </div>
                    <IconChevronDown size={16} className={cn(
                        "stroke-neutral/50",
                        hasSubAccounts ? undefined : "opacity-0"
                    )} />
                </AccordionTrigger>
                <div className="flex justify-end items-center gap-1">
                    <UpdateAccount account={props.groupedAccount.account}>
                        <ButtonGhost
                            icon={<IconPencil />}
                        />
                    </UpdateAccount>
                    <DeleteAccount account={props.groupedAccount.account}>
                        <ButtonGhost
                            icon={<IconTrash />}
                            color="error"
                        />
                    </DeleteAccount>
                </div>
            </div>
            <AccordionContent>
                <Accordion type="multiple">
                    {
                        props.groupedAccount.subAccounts
                            .sort((a, b) => a.account.number.toString().localeCompare(b.account.number.toString()))
                            .map((groupedSubAccount) => (
                                <AccountItem
                                    key={groupedSubAccount.account.id}
                                    groupedAccount={groupedSubAccount}
                                />
                            ))
                    }
                </Accordion>
            </AccordionContent>
        </AccordionItem>
    )
}
