import { FormatNull, FormatPrice, FormatText } from "@coulba/design/formats"
import { CircularLoader } from "@coulba/design/layouts"
import { useQuery } from "@tanstack/react-query"
import { Fragment } from "react/jsx-runtime"
import { accountsOptions } from "../../../services/api/auth/accounts/accountsOptions"
import { recordsOptions } from "../../../services/api/auth/records/recordsOptions"
import { formatAccount } from "../../accounts/format/formatAccount"
import { ErrorMessage } from "../../layouts/errorMessage"
import { Section } from "../../layouts/section/section"
import { Table } from "../../layouts/table/table"
import { getBalance, getGroupedBalance } from "./getBalance"


export function BalanceReport() {
    const accounts = useQuery(accountsOptions)
    const records = useQuery(recordsOptions)

    const accountsData = accounts.data ?? []
    const rowsData = (records.data ?? [])
        .filter((record) => record.isComputed)
        .sort((a, b) => b.date.localeCompare(a.date))
        .flatMap((record) => record.rows)

    const balance = getBalance(rowsData, accountsData)
        .sort((a, b) => a.account.number.toString().localeCompare(b.account.number.toString()))

    const groupedBalance = getGroupedBalance(balance)

    const totalDebit = rowsData.reduce<number>((sum, row) => {
        return sum + Number(row.debit)
    }, 0)

    const totalCredit = rowsData.reduce<number>((sum, row) => {
        return sum + Number(row.credit)
    }, 0)

    const totalBalanceDebit = balance.reduce<number>((previous, entry) => {
        return previous + Number(entry.balance.debit)
    }, 0)

    const totalBalanceCredit = balance.reduce<number>((previous, entry) => {
        return previous + Number(entry.balance.credit)
    }, 0)

    if (accounts.isLoading) return <CircularLoader className="m-3" />
    if (accounts.isError) return <ErrorMessage message={accounts.error.message} />
    if (!accounts.data) return null
    return (
        <Section.Root>
            <Section.Item>
                <div className="min-w-full max-w-full h-full max-h-full overflow-auto rounded-md border border-neutral/10">
                    <Table.Root>
                        <Table.Header.Root>
                            <Table.Header.Row>
                                <Table.Header.Cell>
                                    <span className="text-neutral/75 text-sm">Compte</span>
                                </Table.Header.Cell>
                                <Table.Header.Cell className="w-[1%]" align="right">
                                    <span className="text-neutral/75 text-sm whitespace-nowrap">Débit</span>
                                </Table.Header.Cell>
                                <Table.Header.Cell className="w-[1%]" align="right">
                                    <span className="text-neutral/75 text-sm whitespace-nowrap">Crédit</span>
                                </Table.Header.Cell>
                                <Table.Header.Cell className="w-[1%]" align="right">
                                    <span className="text-neutral/75 text-sm whitespace-nowrap">Solde débiteur</span>
                                </Table.Header.Cell>
                                <Table.Header.Cell className="w-[1%]" align="right">
                                    <span className="text-neutral/75 text-sm whitespace-nowrap">Solde créditeur</span>
                                </Table.Header.Cell>
                            </Table.Header.Row>
                        </Table.Header.Root>
                        <Table.Body.Root className="border-y border-neutral/10 last:border-b-0">
                            <Table.Body.Row>
                                <Table.Body.Cell align="right">
                                    <span className="text-neutral/50">Total</span>
                                </Table.Body.Cell>
                                <Table.Body.Cell className="w-[1%]" align="right">
                                    <FormatPrice price={totalDebit} className="font-bold" />
                                </Table.Body.Cell>
                                <Table.Body.Cell className="w-[1%]" align="right">
                                    <FormatPrice price={totalCredit} className="font-bold" />
                                </Table.Body.Cell>
                                <Table.Body.Cell className="w-[1%]" align="right">
                                    <FormatPrice price={totalBalanceDebit} className="font-bold" />
                                </Table.Body.Cell>
                                <Table.Body.Cell className="w-[1%]" align="right">
                                    <FormatPrice price={totalBalanceCredit} className="font-bold" />
                                </Table.Body.Cell>
                            </Table.Body.Row>
                        </Table.Body.Root>
                        <Table.Body.Root>
                            {
                                groupedBalance.length > 0 ?
                                    groupedBalance.map((balanceEntry) => {
                                        return (
                                            <Fragment>
                                                <Table.Body.Row
                                                    key={balanceEntry.classNumber}
                                                    className="border-neutral/5 bg-neutral/5"
                                                >
                                                    <Table.Body.Cell>
                                                        <FormatText
                                                            text={`Classe ${balanceEntry.classNumber}`}
                                                            className="font-bold"
                                                            wrap
                                                        />
                                                    </Table.Body.Cell>
                                                    <Table.Body.Cell className="w-[1%]" align="right">
                                                        <FormatPrice price={balanceEntry.sum.debit} />
                                                    </Table.Body.Cell>
                                                    <Table.Body.Cell className="w-[1%]" align="right">
                                                        <FormatPrice price={balanceEntry.sum.credit} />
                                                    </Table.Body.Cell>
                                                    <Table.Body.Cell className="w-[1%]" align="right">
                                                        <FormatPrice price={balanceEntry.balance.debit} />
                                                    </Table.Body.Cell>
                                                    <Table.Body.Cell className="w-[1%]" align="right">
                                                        <FormatPrice price={balanceEntry.balance.credit} />
                                                    </Table.Body.Cell>
                                                </Table.Body.Row>
                                                {
                                                    balanceEntry.accounts.map((accountEntry) => {
                                                        return (
                                                            <Table.Body.Row key={accountEntry.account.id} className="border-neutral/5">
                                                                <Table.Body.Cell>
                                                                    <FormatText
                                                                        text={formatAccount(accountEntry.account)}
                                                                        wrap
                                                                    />
                                                                </Table.Body.Cell>
                                                                <Table.Body.Cell className="w-[1%]" align="right">
                                                                    <FormatPrice price={accountEntry.sum.debit} />
                                                                </Table.Body.Cell>
                                                                <Table.Body.Cell className="w-[1%]" align="right">
                                                                    <FormatPrice price={accountEntry.sum.credit} />
                                                                </Table.Body.Cell>
                                                                <Table.Body.Cell className="w-[1%]" align="right">
                                                                    <FormatPrice price={accountEntry.balance.debit} />
                                                                </Table.Body.Cell>
                                                                <Table.Body.Cell className="w-[1%]" align="right">
                                                                    <FormatPrice price={accountEntry.balance.credit} />
                                                                </Table.Body.Cell>
                                                            </Table.Body.Row>
                                                        )
                                                    })
                                                }
                                            </Fragment>
                                        )
                                    })
                                    : (
                                        <Table.Body.Row>
                                            <Table.Body.Cell>
                                                <FormatNull className="" />
                                            </Table.Body.Cell>
                                        </Table.Body.Row>
                                    )
                            }
                        </Table.Body.Root>
                    </Table.Root>
                </div>
            </Section.Item>
        </Section.Root>
    )
}
