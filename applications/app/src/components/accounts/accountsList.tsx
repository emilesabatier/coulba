import { ButtonPlain } from "@coulba/design/buttons"
import { FormatNull } from "@coulba/design/formats"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, CircularLoader } from "@coulba/design/layouts"
import { cn } from "@coulba/design/services"
import { auth } from "@coulba/schemas/routes"
import { IconChevronDown, IconEye, IconPlus } from "@tabler/icons-react"
import { useQuery } from "@tanstack/react-query"
import { ComponentProps } from "react"
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
                <Accordion type="multiple" className="w-full">
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
            </Section.Item>
        </Section.Root>
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
            <div className="w-full flex justify-between items-start gap-1.5">
                <AccordionTrigger className="w-fit flex justify-start items-center gap-3 py-1.5 px-3 hover:bg-neutral/5 rounded-sm">
                    <div className="flex justify-start items-start gap-3">
                        <h2 className="font-bold">{props.groupedAccount.account.number}</h2>
                        <span className="text-neutral/75 text-left">{props.groupedAccount.account.label}</span>
                    </div>
                    <IconChevronDown
                        size={16}
                        className={cn(
                            "text-neutral/50 shrink-0",
                            hasSubAccounts ? undefined : "opacity-0"
                        )}
                    />
                </AccordionTrigger>
                <ReadAccount idAccount={props.groupedAccount.account.id}>
                    <div className="w-fit hover:bg-neutral/5 p-1.5 rounded-sm">
                        <IconEye
                            size={24}
                            className="text-neutral/50 shrink-0"
                        />
                    </div>
                </ReadAccount>
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
